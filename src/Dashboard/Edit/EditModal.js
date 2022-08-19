import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import EditForm from "./EditFrom";
import { EditOutlined } from "@ant-design/icons";

const EditModal = ({ handleOk, data }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);

  const handleCancel = () => {
    closeEditModal();
  };
  return (
    <div>
      <a onClick={() => openEditModal()}><EditOutlined /></a>
      <Modal
        title="Edit"
        visible={showEditModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        
      >
        <EditForm data={data} closeEditModal={closeEditModal}/>
      </Modal>
    </div>
  );
};
export default EditModal;
