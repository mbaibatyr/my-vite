import { useEffect, useState } from "react";
import { Button, Select } from "antd";
// import "./App.css";
import Parent from "./Components/Parent";
import MyDefault2, { MyDefault } from "./Functions";
import P from "./Components/P";
import MyRender from "./Components/MyRender";
import MyUseEffect from "./Components/MyUseEffect";
import MyTable from "./Components/MyTable";
import MyUseRef from "./Components/MyUseRef";

//import { MyComp, Multiply } from "./Functions";
//import * as f from "./Functions";

//import MyDefault, { MyComp, Multiply } from "./Functions";
const App = () => {
  // const [val, setVal] = useState(0);
  // const [val2, setVal2] = useState(0);
  // const [arr, setArr] = useState(["1", "2", "3"]);

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

  // let a = "50";
  //const res = f.Multiply(a, 8);
  return (
    <>
      {/* <MyUseRef /> */}
      <MyTable />
      {/* <MyUseEffect /> */}
      {/* <MyRender num={-150} /> */}
      {/* <P /> */}
      {/* <Parent /> */}
      {/* <MyDefault name="STEP123" />
      <MyDefault2 name="STEP1235666565" /> */}
      {/* <f.MyCompList count={100} /> */}
      {/* <Select
        style={{
          width: 200,
        }}
        placeholder="Choose City"
        showSearch
        status="success"
        optionFilterProp="children"
        //onChange={handleChangeProcess}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
      >
        {f.Files.map((z) => (
          <Option key={z.id}>{z.name}</Option>
        ))}
      </Select> */}

      {/* {res}
      <f.MyComp a={5} b={6} /> */}
      {/* <button onClick={() => setVal(val + 1)}>Кнопка1</button>
      <button onClick={() => setVal2(val2 + 1)}>Кнопка2</button>
      <ul>
        {arr.map((z, index) => (
          <li key={index}>{z}</li>
        ))}
      </ul>
      <Button type="dashed" onClick={() => setArr(["4", ...arr, "5"])}>
        Кнопка3
      </Button> */}
    </>
  );
};
export default App;
