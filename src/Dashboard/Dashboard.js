import { Space, Slider, InputNumber } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../const/static";
import EmployeeTable from "./Table/EmployeeTable";

export const Dashboard = () => {
  const [empData, setEmpData] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => setEmpData(res.data));
  },[]);
  return (
    <div size={"large"}>
      <Slider
        defaultValue={[20, 30]}
        range
        disabled={false}
        min={10}
        max={100}
      />
      <InputNumber
        min={1}
        max={20}
        style={{ margin: "0 16px" }}
        value={0}
        onChange={() => {}}
      />
      <InputNumber
        min={1}
        max={20}
        style={{ margin: "0 16px" }}
        value={0}
        onChange={() => {}}
      />
      <EmployeeTable data={empData}/>
    </div>
  );
};
