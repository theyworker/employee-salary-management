import { Space, Slider , InputNumber} from "antd";
import React from "react";
import EmployeeTable from "./Table/EmployeeTable";

export const Dashboard = () => {
  return (
    <div size={'large'}>
      <Slider  defaultValue={[20, 30]} range disabled={false} min={10} max={100}/>
      <InputNumber
          min={1}
          max={20}
          style={{ margin: '0 16px' }}
          value={0}
          onChange={()=>{}}
        />
        <InputNumber
          min={1}
          max={20}
          style={{ margin: '0 16px' }}
          value={0}
          onChange={()=>{}}
        />
      <EmployeeTable/>
    </div>
  );
};
