import React from 'react';
import { Table } from 'antd';

const data = [
  {
    key: '1',
    category: 'English',
    verb: 'be',
    sentence: 'He loves his friends',
    nestedRows: [
      {
        key: '1-1',
        header: 'German Present',
        details: 'Nested Row 1, Details',
        status: 'Nested Row 1, Status',
      },
      {
        key: '1-2',
        header: 'Nested Header 2',
        details: 'Nested Row 2, Details',
        status: 'Nested Row 2, Status',
      },
    ],
  },
 
];

const columns = [
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Details',
    dataIndex: 'details',
    key: 'details',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

const expandedRowRender = (record) => {
  return (
    <Table
      columns={[
        { title: 'Nested Header', dataIndex: 'header', key: 'header' },
        { title: 'Details', dataIndex: 'details', key: 'details' },
        { title: 'Status', dataIndex: 'status', key: 'status' },
      ]}
      dataSource={record.nestedRows}
      pagination={false}
      showHeader={false}
    />
  );
};

const NestedTable = () => {
  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender,
        rowExpandable: (record) => record.nestedRows && record.nestedRows.length > 0,
      }}
      dataSource={data}
      pagination={false}
    />
  );
};

export default NestedTable;
