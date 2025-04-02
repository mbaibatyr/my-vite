import { Alert, Button, Modal, Popconfirm, message, notification } from "antd";
import React, { useState } from "react";
import hands from "./hands.gif";
import "@ant-design/v5-patch-for-react-19";

const MyModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const Add = () => {
    alert(1234);
  };

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
    </>
  );
};

export default MyModal;
