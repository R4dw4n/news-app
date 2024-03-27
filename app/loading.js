import React from 'react'
import style from "./loading.module.css"
const loading = () => {
  return (
    <div>
    <p className={style.loading}>
        <span className={style.l}>L</span>
        <span className={style.o}>O</span>
        <span className={style.a}>A</span>
        <span className={style.d}>D</span>
        <span className={style.i}>I</span>
        <span className={style.n}>N</span>
        <span className={style.g}>G</span>
    </p>
    <h5 className={style.ex}>Please wait a little while</h5>

</div>  )
}

export default loading
