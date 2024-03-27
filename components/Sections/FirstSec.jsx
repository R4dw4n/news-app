import React from 'react'
import style from './Sictions.module.css'
import Image from 'next/image'
import mainPng from '../assist/news.png'
import { Salsa } from 'next/font/google'
const salsa = Salsa({ subsets: ['latin'], weight: ['400'] })

const FirstSec = () => {
  return (
    <div className={style.sec1}>
      <div className={style.sec1Img}>
        <Image className={style.img1} src={mainPng} alt="News-Image" width={400} height={400} />
      </div>
      <div className={style.sec1Text}>
          <h1 className={salsa.className}>What are the Latest News ?</h1>
          <p>You follow the latest developments in Arab and international events around the clock, and constantly cover news of politics, science, science and technology... .</p>
      </div>
    </div>
  )
}

export default FirstSec
