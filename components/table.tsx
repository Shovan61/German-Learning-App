/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Table } from "antd";

// Assuming you fetch the data from Prisma or any API
// const exampleData = [
//   {
//     id: "uuid1",
//     englishVerb: "run",
//     englishSentence: "I run every day.",
//     present: [
//       {
//         tense: "Present",
//         germanVerb: "laufen",
//         germanSentence: "Ich laufe jeden Tag.",
//         audio: "audio_url_for_present",
//       },
//     ],
//     presentPerfect: [
//       {
//         tense: "Present Perfect",
//         germanVerb: "gelaufen",
//         germanSentence: "Ich bin gelaufen.",
//         audio: "audio_url_for_present_perfect",
//       },
//     ],
//     past: [
//       {
//         tense: "Past",
//         germanVerb: "lief",
//         germanSentence: "Ich lief gestern.",
//         audio: "audio_url_for_past",
//       },
//     ],
//     pastPerfect: [
//       {
//         tense: "Past Perfect",
//         germanVerb: "gewesen",
//         germanSentence: "Ich war gelaufen.",
//         audio: "audio_url_for_past_perfect",
//       },
//     ],
//     future: [
//       {
//         tense: "Future", // Added tense information
//         germanVerb: "werden laufen",
//         germanSentence: "Ich werde laufen.",
//         audio: "audio_url_for_future",
//       },
//     ],
//     futurePerfect: [
//       {
//         tense: "Future Perfect", // Added tense information
//         germanVerb: "wird gelaufen sein",
//         germanSentence: "Es wird gelaufen sein.",
//         audio: "audio_url_for_future_perfect",
//       },
//     ],
//   },
//   // Add more verb objects as necessary...
// ];

const VerbTable = ({ dataSource }: { dataSource: any[] }) => {
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
        key={"child-table"}
        columns={childColumns}
        dataSource={childData}
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
