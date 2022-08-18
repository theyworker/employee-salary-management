import React from "react";
import { Space, Slider, InputNumber } from "antd";

const SalaryFilter = ({ min, max, selectedRange,setSelectedRange }) => {

  let { min : selectedMin, max  : selectedMax} = selectedRange;
  
  const changeValues = (newValues) => {
    let [newMin, newMax] = newValues;
    setSelectedRange({min: newMin , max:newMax})
  }

  const changeMin = (newMin) => setSelectedRange({min: newMin, max: selectedMax})
  const changeMax = (newMax) => setSelectedRange({min: selectedMin, max: newMax})
  return (
    <div style={{padding: '2em'}}>
      <h4>Salary Filter</h4>
      <Slider
        range
        disabled={false}
        min={min}
        max={max}
        value={[selectedMin, selectedMax]}
        onChange={changeValues}
        style={{ margin: '2em 5em'}}
      />
      Min
      <InputNumber
        min={min}
        max={max}
        style={{ margin: "0 16px" }}
        value={selectedMin}
        onChange={changeMin}
      />
      Max
      <InputNumber
        min={min}
        max={max}
        style={{ margin: "0 16px" }}
        value={selectedMax}
        onChange={changeMax}
      />
    </div>
  );
};

export default SalaryFilter;
