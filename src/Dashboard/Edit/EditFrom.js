import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal, message } from "antd";
import { baseUrl } from "../../const/static";
import axios from "axios";

const EditForm = ({ data ,closeEditModal}) => {
  console.log(data);
  let { fullName, id, salary, userName } = data;

  const isDiff = (newFormValues) => {
    let {
      fullName: newFullName,
      salary: nwewSalary,
      userName: newUserName,
    } = newFormValues;

    return (
      fullName != newFullName || userName != newUserName || salary != nwewSalary
    );
  };
  const onFinish = async (val) => {
    if (isDiff(val)) {
      let {
        fullName: newFullName,
        salary: nwewSalary,
        userName: newUserName,
      } = val;
      axios
        .put(`${baseUrl}/${id}`, {
          fullName: newFullName,
          salary: nwewSalary,
          userName: newUserName,
        })
        .then((res) => {
          if (res.status == 200) {
            message.info('Employee Details were updated')
            closeEditModal()
          }
        });
    }
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      autoComplete="off"
      initialValues={{
        fullName: fullName,
        userName: userName,
        salary: salary,
      }}
    >
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[
          {
            required: true,
            message: "Please input your Full Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Login"
        name="userName"
        rules={[{ required: true, message: "Please input your Login!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Salary"
        name="salary"
        rules={[{ required: true, message: "Please input your Salary!" }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default EditForm;
