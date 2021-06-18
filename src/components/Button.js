import React, { Fragment } from "react";

const Button = ({ reverse = Boolean, text }) => {

  const color = reverse ? "#011827" : "#F4F4F4";
  const backgroundColor = reverse ? "#F4F4F4" : "#011827";

  return (
    <Fragment>
      <button
        style={{ 
          backgroundColor: backgroundColor,
          color: color,
          height: "50px",
          width: "175px",
          fontSize: "1.2rem",
          fontWeight: "700",
          borderRadius: "15px",
          boxShadow: "4px 4px 8px rgba(1, 24, 39, 0.35), inset 5px 4px 4px rgba(255, 146, 51, 0.15)"
        }}
      >
        {text}
      </button>
    </Fragment>
  );
};

export default Button;
