import React from "react";
//import { useMyContext } from "./MyContext";
import Child from "./Child";

const Parent = () => {
  //const data = useMyContext();

  return (
    <div>
      <h1>Parent Component</h1>
      {/* <p>Data from context: {data}</p> */}
      <Child />
    </div>
  );
};

export default Parent;
