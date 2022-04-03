import React, { useState, useEffect } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

export default function DataTable1() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "User ID",
      dataIndex: "userId",
    },
    {
      key: "3",
      title: "Title",
      dataIndex: "title",
    },
    {
      key: "4",
      title: "Completed",
      render: (completed) => {
        return <p>{completed ? "Complete" : "In Progress"}</p>;
      },
    },
  ];

  return (
    <>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}
