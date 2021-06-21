import React, { Fragment } from "react";

const Button = ({ reverse = false, text }) => {
  const color = reverse ? "var(--third-color)" : "var(--primary-color)";
  const backgroundColor = reverse
    ? "var(--primary-color)"
    : "var(--third-color)";

  return (
    <Fragment>
      <button
        className="sign__button"
        style={{
          backgroundColor: backgroundColor,
          color: color,
        }}
      >
        {text}
      </button>
    </Fragment>
  );
};

export default Button;
