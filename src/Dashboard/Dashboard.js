import { Space, Slider, InputNumber } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../const/static";
import SalaryFilter from "./SalaryFilter";
import EmployeeTable from "./Table/EmployeeTable";

export const Dashboard = () => {
  const [empData, setEmpData] = useState([]);
  useEffect(() => {
    axios.get(baseUrl).then((res) => setEmpData(res.data));
  }, []);
  return (
    <div size={"large"}>
      <SalaryFilter />
      <EmployeeTable data={empData} />
    </div>
  );
};
