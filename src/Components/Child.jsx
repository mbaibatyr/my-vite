import React from "react";

const Child = ({ onData }) => {
  const sendDataToParent = () => {
    onData("Привет от ребенка!");
  };
  return <button onClick={sendDataToParent}>Отправить данные родителю</button>;
};

export const Child2 = ({ setInputValue }) => {
  return <input type="text" onChange={(e) => setInputValue(e.target.value)} />;
};

export default Child;
