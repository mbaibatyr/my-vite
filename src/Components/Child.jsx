import React, { useState } from "react";

const Child = ({ onData }) => {
  const [inputValue, setInputValue] = useState("");
  // Функция, которая отправит данные родителю
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Передаем данные родительскому компоненту
    onData(inputValue);
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter some text"
      />
      <button onClick={handleSubmit}>Send to Parent</button>
    </div>
  );
};

export const Child2 = ({ setInputValue }) => {
  return <input type="text" onChange={(e) => setInputValue(e.target.value)} />;
};

export default Child;
