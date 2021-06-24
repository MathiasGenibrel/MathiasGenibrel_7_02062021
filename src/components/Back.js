import React, {Fragment} from 'react'

export default function Back({name, switchMenu}) {
  return (
    <Fragment>
      <i className={`${name} fas fa-chevron-left`} onClick={switchMenu} ></i>
    </Fragment>
  )
}
