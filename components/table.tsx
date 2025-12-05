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
import { DeleteFilled } from "@ant-design/icons";
import { deleteFunction } from "@/lib/query";

const VerbTable = ({
  dataSource,
  getListData,
}: {
  dataSource: any[];
  getListData: () => void;
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
      <p>Are you sure to delete this verb?</p>
      <Input
        placeholder="Enter code to confirm"
        value={code}
        onChange={handleCodeChange}
        style={{ marginBottom: 10 }}
      />
    </div>
  );

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
        <>
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
        </>
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
