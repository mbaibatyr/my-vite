import React, { useEffect, useState } from "react";
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

  const columns2 = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Profile",
      dataIndex: "profile_image",
      key: "profile_image",
    },
    {
      title: "Employee name",
      dataIndex: "employee_name",
      key: "employee_name",
    },
    {
      title: "Employee salary",
      dataIndex: "employee_salary",
      key: "employee_salary",
    },
    {
      title: "Employee age",
      dataIndex: "employee_age",
      key: "employee_age",
    },
  ];

  const [data, setData] = useState([]);

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
        console.log(data.data);
        setData(data.data);
        //setLoading2(false);
        //setQty2('Найдено: ' + data.length);
      })
      .catch((error) => {
        console.log("error: " + error);
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
      <Table
        style={{ width: 800 }}
        rowKey={(row) => row.id}
        columns={columns2}
        dataSource={data}
        size="small"
        pagination={false}
      />
    </>
  );
};

export default MyTable;
