import React, { useRef, useState } from "react";

const MyUseRef = () => {
  const Myref = useRef(null);
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value + 1);
    Myref.current = value + 1;
    console.log(value, Myref.current);
  };

  return (
    <>
      <button onClick={handleClick}>Button</button>
    </>
  );
};

export default MyUseRef;
