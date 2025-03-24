import React from "react";
import { Table } from "antd";
import { Files } from "../Functions";

const MyTable = () => {
  let columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "15%",
      key: "name",
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={Files}
        size="small"
        pagination={false}
      />
    </>
  );
};

export default MyTable;
