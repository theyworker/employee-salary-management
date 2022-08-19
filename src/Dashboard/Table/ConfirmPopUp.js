import React from 'react';
import { Popconfirm } from 'antd';
import { DeleteOutlined } from "@ant-design/icons";

const ConfirmPopUp = ({title, confirm, cancel}) =>  (
    <Popconfirm
      title={title}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <a href="#" ><DeleteOutlined /></a>
    </Popconfirm>
  );

  export default ConfirmPopUp;