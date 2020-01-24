import React from "react";

const Table = ({ data, columns }) => {
  return (
    <table className="Table">
      <thead>
        <tr>{columns && columns.map(col => <th>{col}</th>)}</tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  );
};

export default Table;
