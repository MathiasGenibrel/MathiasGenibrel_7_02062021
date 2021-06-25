import React, { Fragment } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 50px;
  width: 175px;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 15px;
  margin-top: calc(var(--spacing) * 1.5);
  box-shadow: 4px 4px 8px rgba(1, 24, 39, 0.35),
    inset 5px 4px 4px rgba(255, 146, 51, 0.15);
  &:active{
    transform: scale(.98);
  } 
`;

const Button = ({ reverse = false, text }) => {
  const color = reverse ? "var(--third-color)" : "var(--primary-color)";
  const backgroundColor = reverse
    ? "var(--primary-color)"
    : "var(--third-color)";

  return (
    <>
      <StyledButton
        className="sign__button"
        style={{
          backgroundColor: backgroundColor,
          color: color,
        }}
      >
        {text}
      </StyledButton>
    </>
  );
};

export default Button;
