import { Button, Modal, Popconfirm, message, notification } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement, incrementByAmount } from "../Redux/counterSlice";

const MyModal_2 = () => {
  const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      {/* <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button> */}
    </>
  );
};

export default MyModal_2;
