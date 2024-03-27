import React from 'react'
import Image from 'next/image'
import style from "./Name.module.css"
import { Salsa } from 'next/font/google'
const salsa = Salsa({ subsets: ['latin'], weight: ['400'] })
const Name = ({ name }) => {
  const im = `/src/assist/${name}.jpg`
  return (
    <>
      <div className={style.name}>
        <span className={style.spn1}></span>
        <span className={style.spn2}></span>
        <div className={salsa.className}>{name}</div>
      </div>
    </>
  )
}
export default Name
