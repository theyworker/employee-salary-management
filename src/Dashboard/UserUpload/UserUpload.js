import React from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const UserUpload = () => {
  return (
    <div>
      <Upload
        accept=".csv"
        showUploadList={false}
        beforeUpload={(file) => {
          const reader = new FileReader();

          reader.onload = (e) => {
            console.log(e.target.result);
          };
          reader.readAsText(file);

          // Prevent upload
          return false;
        }}
      >
        <Button>
         <UploadOutlined />
        </Button>
      </Upload>
    </div>
  );
};

export default UserUpload;
