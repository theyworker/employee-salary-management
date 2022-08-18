import React, { useEffect, useState } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { baseUrl } from "../../const/static";

const UserUpload = () => {
  const [empData, setEmpData] = useState([]);
  useEffect(() => {
    axios.get(baseUrl).then((res) => setEmpData(res.data));
  }, []);

  const extractCSVdata = (rows) => {
    // elimination comments
    let commentsRemoved = rows.filter((row) => !/#.+/.test(row));
    let data = commentsRemoved.map((row) => {
      let [empID, userName, fullName, salary] = row.split(",");
      return { empID, userName, fullName, salary };
    });

    return data;
  };

  const checkTransactionValidity = (rows) => {
    let valid = true;
    let extractedData = extractCSVdata(rows);

    let temp = extractedData.map((row) => {
      let isExisting =
        empData.find(
          (emp) => emp.userName == row.userName && emp.empID != row.empID
        ) || false;
      if (isExisting) {
        valid = false;
        return;
      }
    });

    return valid;
  };


  const updateEmpData = async (rows) => {
    let extractedData = extractCSVdata(rows);
    let temp = extractedData.map((newEmp) => {
      let isExist = empData.find((emp) => emp.empID == newEmp.empID) || false;
      if (isExist) {
        axios.put(`${baseUrl}/${isExist.id}`,{...newEmp})
      }
      else{
       axios.post(baseUrl,{...newEmp})
    //    the mockapi platform; has a major limitation in concurrent posting. 
      }
    });

   
  };

  return (
    <div>
      <Upload
        accept=".csv"
        showUploadList={false}
        beforeUpload={(file) => {
          const reader = new FileReader();

          reader.onload = (e) => {

            let trimmedCSV = e.target.result.trim().split("\r\n");

            if (checkTransactionValidity(trimmedCSV)) {
                updateEmpData(trimmedCSV)
            } else {
              message.warn("Transaction invalid.");
            }
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
