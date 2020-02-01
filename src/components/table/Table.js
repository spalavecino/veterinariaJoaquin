import React from "react";
import Tr from "./tr";

const Table = ({ columns, data }) => {
  return (
    <table className="Table">
      <thead>
        <tr>
          {columns && columns.map((col, index) => <th key={index}>{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((dataRow, index) => {
            return <Tr dataRow={dataRow} key={index} />;
          })}
      </tbody>
    </table>
  );
};

export default Table;
