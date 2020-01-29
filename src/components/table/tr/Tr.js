import React from "react";

const Tr = ({ dataRow }) => {
  const cellsArray = [];

  for (let key in dataRow) {
    if (key !== "id" && dataRow.hasOwnProperty(key)) {
      let cellData = dataRow[key];
      cellsArray.push(cellData);
    }
  }

  return (
    <tr>
      {cellsArray &&
        cellsArray.map((cell, index) => <td key={index}>{cell}</td>)}
    </tr>
  );
};

export default Tr;
