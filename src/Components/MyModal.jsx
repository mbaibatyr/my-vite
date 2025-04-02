import { Alert, Button, Modal, Popconfirm, message, notification } from "antd";
import React, { useState } from "react";
import hands from "./hands.gif";
import "@ant-design/v5-patch-for-react-19";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../Redux/counterSlice";
import MyModal_2 from "./MyModal_2";
import { PlusCircleOutlined, BankTwoTone } from "@ant-design/icons";

const MyModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const Add = () => {
    alert(1234);
  };
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        title="модальное окно"
        open={isModalVisible}
        width={490}
        centered
        onOk={() => {
          Add();
        }}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        asdadasd
      </Modal>
      <Button onClick={() => setIsModalVisible(true)}>Открыть</Button>
      <Popconfirm
        title="Удалить запись?"
        //description={row.login}
        okText="Ok"
        cancelText="Cancel"
        onConfirm={() => {
          message.info("Запись успешно удалена");
          notification.info({
            message: "Info",
            description: <>Запись успешно удалена</>,
          });
        }}
        //   //deleteUser(row.id)
        // //   notification.info({
        // //     message: "Info",
        // //     description: <>No permission for this operation</>,
        // //   })
        // }
      >
        <Button
          style={{
            color: "red",
            marginLeft: 15,
          }}
        >
          кнопка 2
        </Button>
      </Popconfirm>

      <img
        src={hands}
        alt="my-gif"
        // style={{
        //   width: "auto",
        //   marginLeft: 430,
        //   marginTop: 10,
        // }}
      />
      <Button icon={<PlusCircleOutlined />} style={{ color: "red" }} />
      <Button
        size="small"
        icon={<PlusCircleOutlined />}
        style={{ color: "green" }}
      />
      <PlusCircleOutlined
        style={{ color: "blue" }}
        onClick={() => alert(123)}
      />

      <BankTwoTone onClick={() => alert(123)} />

      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>

      <MyModal_2 />
    </>
  );
};

export default MyModal;
