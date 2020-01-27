import React from "react";

const Table = props => {
  console.log(props);
  return (
    <table className="Table">
      <thead>
        <tr>
          {props.columns &&
            props.columns.map((col, index) => <th key={index}>{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.data &&
          props.data.map(d => {
            return (
              <tr key={d.id}>
                <td>{d.owner}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
