"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import axiosInstance from "@/lib/axios";
import UploadAudio from "./UploadAudio";

function Main() {
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

  const handleSubmit = () => {};

  const handleCancel = () => {
    setOpen(false);
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
        onOk={handleSubmit}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isModalLoading}
            onClick={handleSubmit}
          >
            Submit & Create
          </Button>,
        ]}
      >
        <UploadAudio />
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      {/* End of Modal */}
    </Card>
  );
}

export default Main;
