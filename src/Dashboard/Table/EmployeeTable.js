import React from "react";
import { Table, Space } from "antd";
import ConfirmPopUp from "./ConfirmPopUp";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id - b.id
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
    sorter: (a, b) => a.userName - b.userName,
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
    sorter: (a, b) => a.salary - b.salary,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a onClick={() => console.log(record.userName)}>Edit</a>
        <ConfirmPopUp text='Delete' title='Are you sure?' confirm={()=>console.log('Deleting' ,record.userName)}/>
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
