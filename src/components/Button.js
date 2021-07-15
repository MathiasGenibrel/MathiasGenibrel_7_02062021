import React from "react";
import styled from "styled-components";

const Button = ({ reverse = false, text, onClick }) => {
  const color = reverse
    ? (props) => props.theme.thirdColor
    : (props) => props.theme.primaryColor;
  const backgroundColor = reverse
    ? (props) => props.theme.primaryColor
    : (props) => props.theme.thirdColor;

  const StyledButton = styled.button`
    background-color: ${backgroundColor};
    color: ${color};
    height: 50px;
    width: 175px;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 15px;
    margin-top: calc(var(--spacing) * 1.5);
    box-shadow: 4px 4px 8px rgba(1, 24, 39, 0.35),
      inset 5px 4px 4px rgba(255, 146, 51, 0.15);
    &:active {
      transform: scale(0.98);
    }
  `;

  return (
    <>
      <StyledButton onClick={onClick}>{text}</StyledButton>
    </>
  );
};

export default Button;
