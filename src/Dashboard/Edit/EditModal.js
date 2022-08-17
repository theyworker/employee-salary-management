import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import EditForm from "./EditFrom";

const EditModal = ({ handleOk, data }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);

  const handleCancel = () => {
    closeEditModal();
  };
  return (
    <div>
      <a onClick={() => openEditModal()}>Edit</a>
      <Modal
        title="Edit"
        visible={showEditModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        
      >
        <EditForm data={data}/>
      </Modal>
    </div>
  );
};
export default EditModal;
