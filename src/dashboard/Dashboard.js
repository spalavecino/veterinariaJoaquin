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
  const [filteredPets, setFilteredPets] = useState([]);
  const [filter, setFilter] = useState("");

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
      },
      {
        id: "aabc1",
        owner: "Calderon, Daysi",
        numberOfPets: 3,
        firstConsultation: "01/01/2011",
        lastConsultation: "12/12/2019",
        debt: "$200"
      },
      {
        id: "aabc2",
        owner: "Palavecino, Sebastian",
        numberOfPets: 3,
        firstConsultation: "01/01/2012",
        lastConsultation: "12/12/2018",
        debt: "$500"
      },
      {
        id: "aabc3",
        owner: "Curti, Lucia",
        numberOfPets: 1,
        firstConsultation: "01/01/2019",
        lastConsultation: "12/01/2020",
        debt: "$5000"
      },
      {
        id: "aaabc1",
        owner: "Calderon, Daysi",
        numberOfPets: 3,
        firstConsultation: "01/01/2011",
        lastConsultation: "12/12/2019",
        debt: "$200"
      },
      {
        id: "aaabc2",
        owner: "Palavecino, Sebastian",
        numberOfPets: 3,
        firstConsultation: "01/01/2012",
        lastConsultation: "12/12/2018",
        debt: "$500"
      },
      {
        id: "aaabc3",
        owner: "Curti, Lucia",
        numberOfPets: 1,
        firstConsultation: "01/01/2019",
        lastConsultation: "12/01/2020",
        debt: "$5000"
      }
    ];

    setPetsData(data);
    setFilteredPets(data);
  }, []);

  const filterPets = () => {
    const filterLower = filter.toLocaleLowerCase();
    const auxPetsData = petsData.filter(pet => {
      return (
        pet.owner.toLowerCase().includes(filterLower) ||
        pet.numberOfPets.toString().includes(filterLower) ||
        pet.firstConsultation.toString().includes(filterLower) ||
        pet.lastConsultation.toString().includes(filterLower) ||
        pet.debt.toString().includes(filterLower)
      );
    });

    return auxPetsData;
  };

  return (
    <div className="Dashboard">
      <div className="input-icon">
        <input
          type="text"
          onChange={e => setFilter(e.target.value)}
          value={filter}
        />
        <i class="fas fa-search"></i>
      </div>

      {petsData.length && <Table data={filterPets()} columns={columnsHeader} />}
    </div>
  );
};

export default Dashboard;
