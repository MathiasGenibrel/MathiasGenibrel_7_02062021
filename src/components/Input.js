import React, { Fragment as div } from "react";

const Input = ({ nameInput, inputType = "text" }) => {
  return (
    <div>
      <p
        style={{
          color: "#F4F4F4",
          fontSize: ".9rem",
          fontWeight: "500",
          textAlign: "left",
          margin: "0 0 .3rem .5rem"
        }}
      >
        {nameInput}
      </p>
      <input
        type={inputType}
        style={{
          background: "rgba(1, 24, 39, 0.95)",
          textAlign: "center",
          color: "#F4F4F4",
          height: "60px",
          width: "260px",
          borderRadius: "15px",
          boxShadow:
            "4px 4px 8px rgba(1, 24, 39, 0.35), inset 5px 4px 4px rgba(255, 146, 51, 0.15)",
        }}
      ></input>
    </div>
  );
};

export default Input;
