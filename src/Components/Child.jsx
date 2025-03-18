import React from "react";

const Child = ({ sendMessage }) => {
  const handleClick = () => {
    // Отправка данных родителю через callback
    sendMessage("Hello from child!");
  };
  return (
    <div>
      <button onClick={handleClick}>Send message to parent</button>
    </div>
  );
};

export const Child2 = ({ setInputValue }) => {
  return <input type="text" onChange={(e) => setInputValue(e.target.value)} />;
};

export default Child;
