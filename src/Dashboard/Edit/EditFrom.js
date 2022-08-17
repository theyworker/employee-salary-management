import React from "react";
import { Button, Checkbox, Form, Input ,Modal} from 'antd';

const EditForm = ({ onFinish, onFinishFailed }) => {
  return (
    

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Full Name"
            name="username"
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
            name="username"
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
