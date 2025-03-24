import React, { useEffect, useState } from "react";

const MyUseEffect = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const [dt, setDt] = useState(null);

  useEffect(() => {
    console.log("first render");
    setDt("2025-03-24");

    // return()=>{
    // }
  }, []);

  useEffect(() => {
    console.log("Every render");
  });

  useEffect(() => {
    console.log("render only count");
  }, [count]);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Кнопка 1</button>
      <button onClick={() => setValue(value + 1)}>Кнопка 2</button>
      <p>{dt}</p>
    </>
  );
};

export default MyUseEffect;
