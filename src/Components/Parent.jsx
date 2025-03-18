import React, { useState } from "react";
//import { useMyContext } from "./MyContext";
import Child, { Child2 } from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("");
  const handleMessage = (childMessage) => {
    setMessage(childMessage);
  };

  return (
    <div>
      <h1>Message from child: {message}</h1>
      <Child sendMessage={handleMessage} />
      <Child2 setInputValue={handleMessage} />
    </div>
  );
};

export default Parent;
