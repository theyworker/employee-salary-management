import React from "react";
import { Table, Space } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "User Name",
    dataIndex: "userName",
    key: "userName",
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a onClick={() => console.log(record.userName)}>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const EmployeeTable = ({ data }) => {
  return (
    <div>
      <Table
        dataSource={data}
        columns={columns}
        pagination={{ pageSize: 5 }}
        responsive
        loading={data.length == 0 }
      />
    </div>
  );
};

export default EmployeeTable;
