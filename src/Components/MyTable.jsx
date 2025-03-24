import React from "react";
import { Table, Tag } from "antd";
import { Files } from "../Functions";

const MyTable = () => {
  let columns = [
    {
      title: "Id",
      //   dataIndex: "id",
      key: "id",
      width: "10%",
      render: (row) => <span style={{ fontWeight: "bold" }}>{row.id}</span>,
    },
    {
      title: "Name",
      //   dataIndex: "name",
      key: "name",
      render: (row) => (
        <span>
          <Tag color="green">✔️{row.name}</Tag>
        </span>
      ),
    },
  ];

  return (
    <>
      <Table
        style={{ width: 500 }}
        columns={columns}
        dataSource={Files}
        size="small"
        pagination={false}
      />
    </>
  );
};

export default MyTable;
