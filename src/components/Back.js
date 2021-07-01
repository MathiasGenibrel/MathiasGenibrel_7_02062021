import { useHistory } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Icon = styled.i`
  /* position: absolute; */
  color: var(--primary-color);
  font-size: 1.8rem;
`;

export default function Back({ angle = 0 }) {
  let history = useHistory();

  return (
    <>
      <Icon
        style={{ transform: `rotate(${angle}deg)` }}
        className={`fas fa-chevron-left`}
        onClick={history.goBack}
      ></Icon>
    </>
  );
}
