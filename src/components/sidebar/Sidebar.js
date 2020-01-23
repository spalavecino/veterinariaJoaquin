import React, { useState } from "react";

const Sidebar = ({ show }) => {
  const optionsMock = [
    { texto: "Opcion 1", link: "" },
    { texto: "Opcion 2", link: "" },
    { texto: "Opcion 3", link: "" },
    { texto: "Opcion 4", link: "" }
  ];
  const [options, setOptions] = useState(optionsMock);

  const handleClick = e => {
    console.log(e);
  };

  return (
    <aside className={"Sidebar" + (show ? "active" : "")}>
      <ul>
        {options &&
          options.map((opt, index) => {
            return (
              <li onClick={() => handleClick(opt)} key={index}>
                <span>{opt.texto}</span>
              </li>
            );
          })}
      </ul>
    </aside>
  );
};

export default Sidebar;
