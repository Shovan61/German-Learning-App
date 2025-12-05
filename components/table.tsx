/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import {
  message,
  Table,
  Popconfirm,
  PopconfirmProps,
  Input,
  Button,
} from "antd";
import { deleteFunction } from "@/lib/query";
import { FormInstance } from "antd";

const VerbTable = ({
  dataSource,
  getListData,
  setOpen,
  form,
  setAudioUrlForFuture,
  setAudioUrlForFuturePerfect,
  setAudioUrlForPast,
  setAudioUrlForPastPerfect,
  setAudioUrlForPresent,
  setAudioUrlForPresentPerfect,
}: {
  dataSource: any[];
  getListData: () => void;
  setOpen: (isOpen: boolean) => void;
  form: FormInstance;
  setAudioUrlForPresent: (value: string) => void;
  setAudioUrlForPresentPerfect: (value: string) => void;
  setAudioUrlForPast: (value: string) => void;
  setAudioUrlForPastPerfect: (value: string) => void;
  setAudioUrlForFuture: (value: string) => void;
  setAudioUrlForFuturePerfect: (value: string) => void;
}) => {
  const [messageApi, holder] = message.useMessage();
  const [code, setCode] = useState("");
  const secretCode = "9272";

  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    if (code !== secretCode) return messageApi.error("Code do not match");
    handleDelete(e);
    setCode("");
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    setCode("");
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredCode = e.target.value;
    setCode(enteredCode);
  };

  const customPopconfirmContent = (
    <div>
      <p>Are you sure to take action for this verb?</p>
      <Input
        placeholder="Enter code to confirm"
        value={code}
        onChange={handleCodeChange}
        style={{ marginBottom: 10 }}
      />
    </div>
  );

  const handleEdit = (record: any) => {
    if (code !== secretCode) return messageApi.error("Code do not match");
    form.setFieldsValue({
      verb: record.englishVerb,
      sentence: record.englishSentence,
      germanPresentVerb: record.present[0].germanVerb,
      germanPresentSentence: record.present[0].germanSentence,
      germanPresentPerfectVerb: record.presentPerfect[0].germanVerb,
      germanPresentPerfectSentence: record.presentPerfect[0].germanSentence,
      germanPastVerb: record.past[0].germanVerb,
      germanPastSentence: record.past[0].germanSentence,
      germanPastPerfectVerb: record.pastPerfect[0].germanVerb,
      germanPastPerfectSentence: record.pastPerfect[0].germanSentence,
      germanFutureVerb: record.future[0].germanVerb,
      germanFutureSentence: record.future[0].germanSentence,
      germanFuturePerfectVerb: record.futurePerfect[0].germanVerb,
      germanFuturePerfectSentence: record.futurePerfect[0].germanSentence,
      audioUrlForPresent: record.present[0].audio,
      audioUrlForPresentPerfect: record.presentPerfect[0].audio,
      audioUrlForPast: record.past[0].audio,
      audioUrlForPastPerfect: record.pastPerfect[0].audio,
      audioUrlForFuture: record.future[0].audio,
      audioUrlForFuturePerfect: record.futurePerfect[0].audio,
    });
    setAudioUrlForPresent(record.present[0].audio);
    setAudioUrlForPresentPerfect(record.presentPerfect[0].audio);
    setAudioUrlForPast(record.past[0].audio);
    setAudioUrlForPastPerfect(record.pastPerfect[0].audio);
    setAudioUrlForFuture(record.future[0].audio);
    setAudioUrlForFuturePerfect(record.futurePerfect[0].audio);
    setOpen(true);
    setCode("");
  };

  const handleDelete = async (record: any) => {
    try {
      const response = await deleteFunction(record.id);
      if (response.status === 200) {
        getListData();
        return messageApi.success("Successfully Deleted!");
      }
      return messageApi.error("Can not delete!");
    } catch (error) {
      console.log(error);
      message.error("Something went wrong!");
    }
  };
  const parentColumns = [
    {
      title: "English Verb",
      dataIndex: "englishVerb",
      key: "englishVerb",
    },
    {
      title: "English Sentence",
      dataIndex: "englishSentence",
      key: "englishSentence",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: any) => (
        <div className="flex gap-3 items-center">
          {holder}
          <Popconfirm
            title={customPopconfirmContent}
            onConfirm={() => confirm(record)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>{" "}
          </Popconfirm>
          <Popconfirm
            title={customPopconfirmContent}
            onConfirm={() => handleEdit(record)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary">Edit</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  // Define columns for the child rows (German verb, sentence, audio, and tense)
  const childColumns = [
    {
      title: "Tense",
      dataIndex: "tense",
      key: "tense",
    },
    {
      title: "German Verb",
      dataIndex: "germanVerb",
      key: "germanVerb",
    },
    {
      title: "German Sentence",
      dataIndex: "germanSentence",
      key: "germanSentence",
    },
    {
      title: "Audio",
      dataIndex: "audio",
      key: "audio",
      render: (text: any) => (
        <audio controls>
          <source src={text} type="audio/mp3" />
        </audio>
      ),
    },
  ];

  // Generate expanded row data for each verb (for child rows)
  const expandedRowRender = (record: any) => {
    const childData = [
      ...record?.present,
      ...record?.presentPerfect,
      ...record?.past,
      ...record?.pastPerfect,
      ...record?.future,
      ...record?.futurePerfect,
    ];

    return (
      <Table
        key={`child-table-${record.id}`}
        columns={childColumns}
        dataSource={childData.map((child, index) => ({
          ...child,
          key: `child-${record.id}-${index}`, // Add a unique key for each row
        }))}
        pagination={false}
      />
    );
  };

  return (
    <Table
      key={"table"}
      columns={parentColumns}
      dataSource={dataSource}
      expandable={{ expandedRowRender, defaultExpandAllRows: true }}
      rowKey="id"
    />
  );
};

export default VerbTable;
