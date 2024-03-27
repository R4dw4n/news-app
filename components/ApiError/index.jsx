import React from 'react'
import style from "./error.module.css"
const ApiError = () => {
  return (
    <div className={style.err}>
        <h1>sorry</h1>
        <h2>Api error</h2>
        <p>You have reached your request limit for today, the next reset will be tomorrow at midnight UTC</p>
    </div>
  )
}

export default ApiError
