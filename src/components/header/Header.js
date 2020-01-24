import React from "react";

const Header = ({ buttonPressed, click }) => {
  return (
    <header className="Header">
      <nav>
        <button onClick={click} className={buttonPressed ? "active" : ""}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        {/* <img src="" alt=""/> */}
        <span>Veterinaria Joaquin</span>
        <i className="fas fa-user"></i>
      </nav>
    </header>
  );
};

export default Header;
