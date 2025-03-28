import React, { useRef, useState } from "react";

const MyUseRef = () => {
  const Myref = useRef(null);
  const Myref2 = useRef(null);
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value + 1);
    Myref.current.focus();
    Myref2.current = value + 1;
    //console.log(value, Myref.current);
  };

  return (
    <>
      <button onClick={handleClick}>Button</button>
      <input type="text" />
      <input type="text" ref={Myref} />
      <input type="text" value={Myref2.current} />
    </>
  );
};

export default MyUseRef;
