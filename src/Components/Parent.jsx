import React, { useState } from "react";
//import { useMyContext } from "./MyContext";
import Child, { Child2 } from "./Child";

const Parent = () => {
  const [data, setData] = useState("");
  const [value, setValue] = useState("");

  const handleData = (newData) => {
    setData(newData);
  };
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h1>Parent Component</h1>
      <h1>Current value: {value}</h1>
      <button onClick={() => setValue(value === "world" ? "step" : "world")}>
        Toggle Theme
      </button>
      <h1>Data from Child: {data}</h1>
      <Child onData={handleData} />
      <br />
      {/* <Child3 /> */}
      <br />
      <br />
      <p>Значение: {inputValue}</p>
      <Child2 setInputValue={setInputValue} />
      {/* <button onClick={handleLogin}>Login</button> */}
    </div>
  );
};

export default Parent;
