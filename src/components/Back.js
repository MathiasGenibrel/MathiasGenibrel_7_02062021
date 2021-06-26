import { useHistory } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Icon = styled.i`
  position: absolute;
  color: var(--primary-color);
  font-size: 1.8rem;
  left: 1.5rem;
  top: 1.5rem;
`;

export default function Back({ name, switchMenu }) {
  let history = useHistory();

  return (
    <>
      <Icon
        className={`${name} fas fa-chevron-left`}
        onClick={history.goBack}
      ></Icon>
    </>
  );
}
