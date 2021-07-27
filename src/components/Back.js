import { useHistory } from "react-router-dom";
import React from "react";
import {Icon} from "../styles/component";

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
