import React, { Fragment as div } from "react";

const Input = ({ inputTitle, inputType = "text" }) => {
  return (
    <div>
      <p className="sign__input__title">{inputTitle}</p>
      <input type={inputType} className="sign__input__user"></input>
    </div>
  );
};

export default Input;
