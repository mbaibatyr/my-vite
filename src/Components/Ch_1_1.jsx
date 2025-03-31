import React from "react";
import { useInfo } from "../App";

const Ch_1_1 = () => {
  const { info, setInfo } = useInfo();
  return (
    <div>
      {info}
      <button onClick={() => setInfo("hello step от внука")}>
        Кнопка на внуке
      </button>
    </div>
  );
};

export default Ch_1_1;
