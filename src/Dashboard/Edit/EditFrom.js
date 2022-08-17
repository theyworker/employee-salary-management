import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";

const EditForm = ({ data, onFinish, onFinishFailed }) => {
  console.log(data);
  let { fullName, id, salary, userName } = data;
  const [fullNameValue, setFullNameValue] = useState(fullName);
  const [userNameValue, setUserNameValue] = useState(userName);
  const [salaryValue, setSalaryValue] = useState(salary);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      // initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      initialValues={{
        fullName: fullNameValue,
        username: userNameValue,
        salary: salaryValue,
      }}
    >
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: "Please input your Full Name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Login"
        name="username"
        rules={[{ required: true, message: "Please input your Login!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Salary"
        name="salary"
        rules={[{ required: true, message: "Please input your Salary!" }]}
      >
        <Input />
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
