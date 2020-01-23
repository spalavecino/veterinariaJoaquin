import React from "react";

const Header = () => {
  const handleClick = e => {
    let buttonElement = document.querySelector(".Header button");

    if (buttonElement.className) {
      buttonElement.className = "";
    } else {
      buttonElement.className = "active";
    }
  };

  return (
    <header className="Header">
      <nav>
        <button onClick={handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        {/* <img src="" alt=""/> */}
        <span>Veterinaria Joaquin</span>
      </nav>
    </header>
  );
};

export default Header;
