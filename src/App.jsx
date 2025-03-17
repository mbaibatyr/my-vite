import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  const [val, setVal] = useState(0);
  const [val2, setVal2] = useState(0);
  const [arr, setArr] = useState(["1", "2", "3"]);

  // useEffect(() => {
  //   console.log("Компонент создался");

  //   return () => {
  //     console.log("Компонент разобрался");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("Компонент изменился");
  // }, [val]);

  // useEffect(() => {
  //   console.log("Компонент изменился2");
  // });

  return (
    <>
      App
      <button onClick={() => setVal(val + 1)}>Кнопка1</button>
      <button onClick={() => setVal2(val2 + 1)}>Кнопка2</button>
      <ul>
        {arr.map((z) => (
          <li>{z}</li>
        ))}
      </ul>
      <button onClick={() => setArr(["4", ...arr, "5"])}>Кнопка3</button>
    </>
  );
};
export default App;
