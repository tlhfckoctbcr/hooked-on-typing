import React from "react";
import Cell from "../Cell/Cell";

const Row = ({ data }) => {
  return (
    <tr>
      <Cell cell={data} />
    </tr>
  )
};

export default Row;

