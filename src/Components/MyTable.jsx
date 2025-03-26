import React, { useEffect } from "react";
import { Table, Tag } from "antd";
import { Files } from "../Functions";

const MyTable = () => {
  let columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "10%",
      // render: (row) => <span style={{ fontWeight: "bold" }}>{row.id}</span>,
    },
    {
      title: "Name",
      //   dataIndex: "name",
      key: "name",
      render: (row) => (
        <span>
          <Tag color="gold">✔️{row.name}</Tag>
        </span>
      ),
    },
  ];

  const fetchAll = () => {
    //setLoading2(true);
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`https://dummy.restapiexample.com/api/v1/employees`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        //setLoading2(false);
        //setDataLog(data);
        //setQty2('Найдено: ' + data.length);
      });
  };

  useEffect(() => {
    fetchAll();
    console.log("first mounting");
  }, []);

  return (
    <>
      <Table
        style={{ width: 100 }}
        columns={columns}
        dataSource={Files}
        size="small"
        pagination={false}
      />
    </>
  );
};

export default MyTable;
