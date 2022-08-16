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
  const [selectedRange, setSelectedRange] = useState({ min: 0, max: 0 });

  const findMax = () => Math.max(...empData.map((emp) => emp.salary));
  const findMin = () => Math.min(...empData.map((emp) => emp.salary));
  useEffect(() => {
    if (empData.length > 0) {
      setSelectedRange({ min: findMin(), max: findMax() });
    }
  }, [empData]);

  const filteredData = () =>
    empData.filter(
      (emp) => emp.salary > selectedRange.min && emp.salary < selectedRange.max
    );
  return (
    <div size={"large"}>
      <SalaryFilter
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
        min={findMin()}
        max={findMax()}
      />
      <EmployeeTable data={filteredData()} />
    </div>
  );
};
