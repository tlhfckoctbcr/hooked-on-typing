import React from "react";
import "./App.css";
import Table from "./components/Table/Table";

const App = () => (
  <Table
    title={"Table Title"}
    columns={[
      { title: "Name", field: "name" },
      { title: "Age", field: "age" },
      { title: "Phone", field: "phone" }
    ]}
    data={[
      {
        name: "Stuart",
        age: 30,
        phone: "843-123-4500"
      },
      {
        name: "Ally",
        age: 26,
        phone: "843-123-4412"
      }
    ]}
  />
);

export default App;
