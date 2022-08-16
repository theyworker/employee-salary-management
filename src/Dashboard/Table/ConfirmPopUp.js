import React from 'react';
import { Popconfirm } from 'antd';

const ConfirmPopUp = ({title, confirm, cancel, text}) =>  (
    <Popconfirm
      title={title}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <a href="#">{text}</a>
    </Popconfirm>
  );

  export default ConfirmPopUp;