import React, { useEffect } from "react";
import { useInfo } from "../App";
import Ch_1_1 from "./Ch_1_1";

const Ch_1 = () => {
  const { info, setInfo } = useInfo();
  //   useEffect(() => {
  //     setInfo("hello step");
  //   }, []);

  return (
    <div>
      <button onClick={() => setInfo("hello step")}>Кнопка</button>
      <Ch_1_1 />
    </div>
  );
};

export default Ch_1;
