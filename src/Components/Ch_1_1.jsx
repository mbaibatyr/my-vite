import React from "react";
import { useInfo } from "../App";

const Ch_1_1 = () => {
  const { info, setInfo } = useInfo();
  return <div>{info}</div>;
};

export default Ch_1_1;
