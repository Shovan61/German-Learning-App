import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadProps } from "antd";

const { Dragger } = Upload;

type UploadAudioProps = {
  audioUrl: string | null;
  setAudioUrl: (audioUrl: string | null) => void;
  tense:
    | "Present"
    | "Past"
    | "Present Perfect"
    | "Past Perfect"
    | "Future"
    | "Future Perfect";
};

const UploadAudio = ({ setAudioUrl, audioUrl, tense }: UploadAudioProps) => {
  const props: UploadProps = {
    name: "file",
    multiple: false,
    accept: ".mp3",
    action: "/api/upload-audio",
    beforeUpload(file) {
      // Check if the file is an MP3 file

      if (!file.type.includes("audio")) {
        message.error(`${file.name} is not a valid MP3 file.`);
        return Upload.LIST_IGNORE; // Prevent file upload
      }
      return true; // Allow file upload
    },
    onChange(info) {
      const { file } = info;
      const status = file.status;
      const response = file.response;

      if (status === "uploading") {
        console.log("Uploading:", file.name);
      }

      if (status === "done") {
        message.success(`${file.name} file uploaded successfully.`);
        if (response?.audioUrl) {
          setAudioUrl(response.audioUrl); // Store the audio URL
        }
      } else if (status === "error") {
        message.error(`${file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
    onRemove(e) {
      setAudioUrl(null);
      console.log(e);
    },
  };

  // console.log(audioUrl, tense, "audiourl");

  return (
    <div>
      <Dragger {...props} maxCount={1}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag the {tense} MP3 file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single MP3 file upload only. Please make sure the file
          is in MP3 format.
        </p>
      </Dragger>

      {audioUrl && (
        <div className="flex gap-2 items-center">
          <div style={{ marginTop: "20px" }}>
            <h3 className="font-semibold ml-2 mb-2">Uploaded Audio:</h3>
            <audio controls>
              <source src={audioUrl} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadAudio;
