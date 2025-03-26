import React, { useEffect, useState } from "react";
import { Table, Tag, Select } from "antd";
import { Employees, Files } from "../Functions";
import "./table.css";

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

  const [age, setAge] = useState("");
  const handleChangeAge = (value) => {
    setAge(value);
    //console.log(value);
  };
  const [data, setData] = useState([]);

  // const fetchAll = () => {
  //   //setLoading2(true);
  //   const requestOptions = {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   };
  //   fetch(`https://dummy.restapiexample.com/api/v1/employees`, requestOptions)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data.data);
  //       //setLoading2(false);
  //       //setQty2('Найдено: ' + data.length);
  //     })
  //     .catch((error) => {
  //       console.log("error: " + error);
  //     });
  // };

  const fetchAll2 = () => {
    //setLoading2(true);
    setData(Employees.data);
  };

  const Filter = () => {
    switch (age) {
      case "0":
        setData(Employees.data);
        break;

      case "2":
        setData(Employees.data.filter((z) => z.employee_age == 61));
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    //fetchAll();
    fetchAll2();
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
      <Select
        style={{
          width: 170,
        }}
        // value={age}
        showSearch
        status="success"
        defaultValue="ALL"
        optionFilterProp="children"
        onChange={handleChangeAge}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
      >
        <Option key="0">ALL</Option>
        <Option key="2">21-30</Option>
        <Option key="3">31-40</Option>
        <Option key="4">41-50</Option>
        <Option key="5">51-60</Option>
        <Option key="6">61-70</Option>
      </Select>

      <button onClick={Filter}>Filter</button>
      <Table
        className="table-striped-rows"
        style={{ width: 800 }}
        rowKey={(row) => row.id}
        columns={columns2}
        dataSource={data}
        size="small"
        // pagination={false}
        pagination={{
          position: ["topRight"],
          showSizeChanger: true,
          defaultPageSize: 10,
          pageSizeOptions: ["10", "25", "50", "100", "200"],
        }}
      />
    </>
  );
};

export default MyTable;
