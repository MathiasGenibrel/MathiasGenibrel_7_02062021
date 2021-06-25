import { useHistory } from "react-router-dom";
import React from 'react'

export default function Back({name, switchMenu}) {

  let history = useHistory();

  return (
    <>
      <i className={`${name} fas fa-chevron-left`} onClick={history.goBack} ></i>
    </>
  )
}
