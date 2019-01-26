import React, { useState } from "react";
import Row from "../Row/Row";

const Table = () => {
  return (
    <table>
      {
        data.map((x, i) => <Row key={i} data={x} />)
      }
    </table>
  );
};

export default Table;
