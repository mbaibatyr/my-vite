import React, { createContext, useContext, useEffect, useState } from "react";
import Ch_1 from "./Components/Ch_1";
const InfoContext = createContext(null);

const App = () => {
  const [info, setInfo] = useState("");

  return (
    <>
      <InfoContext.Provider value={{ info, setInfo }}>
        <h1>{info}</h1>
        <Ch_1 />
      </InfoContext.Provider>
    </>
  );
};

export const useInfo = () => useContext(InfoContext);
export default App;
