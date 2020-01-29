import React from "react";
import Tr from "./tr";

const Table = ({ columns, data }) => {
  console.log(columns, data);

  for (let [key, value] of Object.entries(data[0])) {
    console.log(key, value);
  }

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
            return (
              <Tr dataRow={dataRow} key={index} />
              // <tr key={index}>
              //   {() => {
              //     let cells = [];
              //     for (let key in d) {
              //       if (key != "id") {
              //         cells.push(<td>d[key]</td>);
              //       }
              //     }
              //     return cells;
              //   }}
              // </tr>
            );

            // return (
            //   <tr key={d.id}>
            //     <td>{d.owner}</td>
            //   </tr>
            // );
          })}
      </tbody>
    </table>
  );
};

export default Table;
