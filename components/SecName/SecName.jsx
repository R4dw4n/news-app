import React from 'react'
import style from './na.module.css'
const SecName = (props) => {
  return (
    <div className={style.name}>
      <h2>{props.name}</h2>
    </div>
  )
}

export default SecName
