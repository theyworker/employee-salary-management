import React from "react";
import { Button, Checkbox, Form, Input ,Modal} from 'antd';
import EditForm from "./EditFrom";

const EditModal = ({ modalText, handleOk, confirmLoading, handleCancel,onFinish, onFinishFailed }) => {
  return (
    <div>
      <Modal
        title="Edit"
        visible={true}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={false}
      >
        <p>{modalText}</p>

      <EditForm/>
      </Modal>
    </div>
  );
};
export default EditModal;
