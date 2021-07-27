import React from "react";
import { StyledButton, StyledButtonReverse } from "../styles/component";

const Button = ({ reverse = false, text, onClick }) => {
  const btn = reverse ? (
    <StyledButtonReverse onClick={onClick}>{text}</StyledButtonReverse>
  ) : (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  );
  return <>{btn}</>;
};

export default Button;
