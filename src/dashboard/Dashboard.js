import React, { useEffect, useState } from "react";
import Table from "../components/table";

const Dashboard = () => {
  const [petsData, setPetsData] = useState([]);
  const columnsHeader = [
    "Dueño",
    "Cant. de Mascotas",
    "1er Consulta",
    "Últ. Consulta",
    "Deuda"
  ];
  useEffect(() => {
    const data = [
      {
        id: "abc1",
        owner: "Calderon, Daysi",
        numberOfPets: 3,
        firstConsultation: "01/01/2011",
        lastConsultation: "12/12/2019",
        debt: "$200"
      },
      {
        id: "abc2",
        owner: "Palavecino, Sebastian",
        numberOfPets: 3,
        firstConsultation: "01/01/2012",
        lastConsultation: "12/12/2018",
        debt: "$500"
      },
      {
        id: "abc3",
        owner: "Curti, Lucia",
        numberOfPets: 1,
        firstConsultation: "01/01/2019",
        lastConsultation: "12/01/2020",
        debt: "$5000"
      }
    ];

    setPetsData(petsData);
  }, []);
  return <Table data={petsData} columns={columnsHeader} />;
};

export default Dashboard;
