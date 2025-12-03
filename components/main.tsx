"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Modal,
  Input,
  Form,
  FormProps,
  Divider,
  message,
} from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import axiosInstance from "@/lib/axios";
import UploadAudio from "./UploadAudio";

export type FieldType = {
  verb: string;
  sentence: string;
  germanPresentVerb: string;
  germanPresentSentence: string;
  germanPresentPerfectVerb: string;
  germanPresentPerfectSentence: string;
  germanPastVerb: string;
  germanPastSentence: string;
  germanPastPerfectVerb: string;
  germanPastPerfectSentence: string;
  germanFutureVerb: string;
  germanFutureSentence: string;
  germanFuturePerfectVerb: string;
  germanFuturePerfectSentence: string;
  audioUrlForPresent: string;
  audioUrlForPresentPerfect: string;
  audioUrlForPast: string;
  audioUrlForPastPerfect: string;
  audioUrlForFuture: string;
  audioUrlForFuturePerfect: string;
};

function Main() {
  const [audioUrlForPresent, setAudioUrlForPresent] = useState<string | null>(
    null
  );
  const [audioUrlForPresentPerfect, setAudioUrlForPresentPerfect] = useState<
    string | null
  >(null);
  const [audioUrlForPast, setAudioUrlForPast] = useState<string | null>(null);
  const [audioUrlForPastPerfect, setAudioUrlForPastPerfect] = useState<
    string | null
  >(null);
  const [audioUrlForFuture, setAudioUrlForFuture] = useState<string | null>(
    null
  );
  const [form] = Form.useForm();
  const [audioUrlForFuturePerfect, setAudioUrlForFuturePerfect] = useState<
    string | null
  >(null);
  const [dataSource, setdataSource] = useState([]);
  const [open, setOpen] = useState(false);
  const [isTableLoading, setisTableLoading] = useState(false);
  const [isModalLoading, setisModalLoading] = useState(false);

  const getListData = async () => {
    try {
      const response = await axiosInstance.get("/list");
      console.log(response, "===========response=============");
    } catch (error) {
      console.log(error);
    }
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    form.setFieldsValue({
      verb: "",
      sentence: "",
      germanPresentVerb: "",
      germanPresentSentence: "",
      germanPresentPerfectVerb: "",
      germanPresentPerfectSentence: "",
      germanPastVerb: "",
      germanPastSentence: "",
      germanPastPerfectVerb: "",
      germanPastPerfectSentence: "",
      germanFutureVerb: "",
      germanFutureSentence: "",
      germanFuturePerfectVerb: "",
      germanFuturePerfectSentence: "",
      audioUrlForPresent: "",
      audioUrlForPresentPerfect: "",
      audioUrlForPast: "",
      audioUrlForPastPerfect: "",
      audioUrlForFuture: "",
      audioUrlForFuturePerfect: "",
    });
    setAudioUrlForPresent(null);
    setAudioUrlForPresentPerfect(null);

    setAudioUrlForPast(null);
    setAudioUrlForPastPerfect(null);

    setAudioUrlForFuture(null);
    setAudioUrlForFuturePerfect(null);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const body = {
        ...values,
        audioUrlForPresent: audioUrlForPresent,
        audioUrlForPresentPerfect: audioUrlForPresentPerfect,
        audioUrlForPast: audioUrlForPast,
        audioUrlForPastPerfect: audioUrlForPastPerfect,
        audioUrlForFuture: audioUrlForFuture,
        audioUrlForFuturePerfect: audioUrlForFuturePerfect,
      };
      console.log("Success:", body);
      const response = await axiosInstance.post("/submit-form", body);
      if (response.status === 200) {
        message.success("Saved successfully");
        console.log(response.data);
      } else {
        message.error("Could not save data!");
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong!");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    getListData();
  }, []);

  return (
    <Card className="w-full shadow-xl">
      <div className="flex p-2 justify-end">
        <Button type="primary" onClick={showModal}>
          <PlusCircleOutlined />
          Create
        </Button>
      </div>
      {/* Modal */}
      <Modal
        open={open}
        title="Create Verb with Sentence"
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <Form
          form={form}
          name="Word"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Divider>English</Divider>
          <Form.Item<FieldType>
            label="English Verb"
            name="verb"
            rules={[{ required: true, message: "Please input English Verb!" }]}
            layout="vertical"
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="English Sentence"
            name="sentence"
            rules={[
              {
                required: true,
                message: "Please input your English Sentence!",
              },
            ]}
            layout="vertical"
          >
            <Input />
          </Form.Item>

          <Divider />

          <Divider>German Present</Divider>

          {/* Present */}
          <Form.Item<FieldType>
            label="German Present Tense Verb"
            name="germanPresentVerb"
            rules={[{ required: true, message: "Please input  Verb!" }]}
            layout="vertical"
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="German Present Tense Sentence"
            name="germanPresentSentence"
            rules={[
              {
                required: true,
                message: "Please input your Sentence!",
              },
            ]}
            layout="vertical"
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="German Present Tense Sentence Audio"
            name="audioUrlForPresent"
            rules={[
              {
                message: "Please input your Audio!",
                validator: (_, value) => {
                  if (audioUrlForPresent && audioUrlForPresent?.length > 0) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject("audioUrlForPresent");
                  }
                },
              },
            ]}
            layout="vertical"
          >
            <UploadAudio
              audioUrl={audioUrlForPresent}
              setAudioUrl={setAudioUrlForPresent}
            />
          </Form.Item>

          <Divider />

          <Divider>German Present Perfect</Divider>

          {/* Present Perfect */}
          <Form.Item<FieldType>
            label="German Present Perfect Tense Verb"
            name="germanPresentPerfectVerb"
            rules={[{ required: true, message: "Please input Verb!" }]}
            layout="vertical"
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="German Present Perfect Tense Sentence"
            name="germanPresentPerfectSentence"
            rules={[
              {
                required: true,
                message: "Please input your Sentence!",
              },
            ]}
            layout="vertical"
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="German Present Tense Sentence Audio"
            name="audioUrlForPresentPerfect"
            rules={[
              {
                message: "Please input your Audio!",
                validator: (_, value) => {
                  if (
                    audioUrlForPresentPerfect &&
                    audioUrlForPresentPerfect?.length > 0
                  ) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject("audioUrlForPresentPerfect");
                  }
                },
              },
            ]}
            layout="vertical"
          >
            <UploadAudio
              audioUrl={audioUrlForPresentPerfect}
              setAudioUrl={setAudioUrlForPresentPerfect}
            />
          </Form.Item>

          <Divider />

          <Divider>German Past</Divider>

          {/* Past */}
          <Form.Item<FieldType>
            label="German Past Tense Verb"
            name="germanPastVerb"
            rules={[{ required: true, message: "Please input Verb!" }]}
            layout="vertical"
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="German Past Tense Sentence"
            name="germanPastSentence"
            rules={[
              {
                required: true,
                message: "Please input your Sentence!",
              },
            ]}
            layout="vertical"
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="German Past Sentence Audio"
            name="audioUrlForPast"
            rules={[
              {
                message: "Please input your Audio!",
                validator: (_, value) => {
                  if (audioUrlForPast && audioUrlForPast?.length > 0) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject("audioUrlForPast");
                  }
                },
              },
            ]}
            layout="vertical"
          >
            <UploadAudio
              audioUrl={audioUrlForPast}
              setAudioUrl={setAudioUrlForPast}
            />
          </Form.Item>

          <Divider>German Past Perfect</Divider>

          {/* Past Perfect */}
          <Form.Item<FieldType>
            label="German Past Perfect Tense Verb"
            name="germanPastPerfectVerb"
            rules={[{ required: true, message: "Please input Verb!" }]}
            layout="vertical"
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="German Past Perfect Tense Sentence"
            name="germanPastPerfectSentence"
            rules={[
              {
                required: true,
                message: "Please input your Sentence!",
              },
            ]}
            layout="vertical"
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="German Past Perfect Sentence Audio"
            name="audioUrlForPastPerfect"
            rules={[
              {
                message: "Please input your Audio!",
                validator: (_, value) => {
                  if (
                    audioUrlForPastPerfect &&
                    audioUrlForPastPerfect?.length > 0
                  ) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject("audioUrlForPastPerfect");
                  }
                },
              },
            ]}
            layout="vertical"
          >
            <UploadAudio
              audioUrl={audioUrlForPastPerfect}
              setAudioUrl={setAudioUrlForPastPerfect}
            />
          </Form.Item>

          <Divider />

          <Divider>German Future</Divider>

          {/* Future */}
          <Form.Item<FieldType>
            label="German Future Tense Verb"
            name="germanFutureVerb"
            rules={[{ required: true, message: "Please input Verb!" }]}
            layout="vertical"
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="German Future Tense Sentence"
            name="germanFutureSentence"
            rules={[
              {
                required: true,
                message: "Please input your Sentence!",
              },
            ]}
            layout="vertical"
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="German Future Sentence Audio"
            name="audioUrlForFuture"
            rules={[
              {
                message: "Please input your Audio!",
                validator: (_, value) => {
                  if (audioUrlForFuture && audioUrlForFuture?.length > 0) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject("audioUrlForFuture");
                  }
                },
              },
            ]}
            layout="vertical"
          >
            <UploadAudio
              audioUrl={audioUrlForFuture}
              setAudioUrl={setAudioUrlForFuture}
            />
          </Form.Item>

          <Divider />

          <Divider>German Future Perfect</Divider>

          {/* Future Perfect*/}
          <Form.Item<FieldType>
            label="German Future Perfect Tense Verb"
            name="germanFuturePerfectVerb"
            rules={[{ required: true, message: "Please input Verb!" }]}
            layout="vertical"
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="German Future Tense Sentence"
            name="germanFuturePerfectSentence"
            rules={[
              {
                required: true,
                message: "Please input your Sentence!",
              },
            ]}
            layout="vertical"
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="German Future Sentence Audio"
            name="audioUrlForFuturePerfect"
            rules={[
              {
                message: "Please input your Audio!",
                validator: (_, value) => {
                  if (
                    audioUrlForFuturePerfect &&
                    audioUrlForFuturePerfect?.length > 0
                  ) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject("audioUrlForFuturePerfect");
                  }
                },
              },
            ]}
            layout="vertical"
          >
            <UploadAudio
              audioUrl={audioUrlForFuturePerfect}
              setAudioUrl={setAudioUrlForFuturePerfect}
            />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {/* End of Modal */}
    </Card>
  );
}

export default Main;
