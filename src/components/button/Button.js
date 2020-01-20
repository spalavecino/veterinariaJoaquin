import React from "react";
import "./Button.scss";

const Button = ({ icon, text, background, callback, fontColor }) => {
  return (
    <button
      onClick={callback}
      style={{ backgroundColor: background, color: fontColor }}
      className="Button"
    >
      {icon && <i className={icon}></i>}

      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
