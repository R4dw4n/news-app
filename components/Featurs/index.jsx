import React from 'react'
import Image from 'next/image'
import style from './featutre.module.css'
import passion from '../assist/passion.jpg'
import quality from '../assist/quality.jpg'
import time from '../assist/time.jpg'
import SecName from '../SecName/SecName'
const Featurs = () => {
  return (
    <>
    <SecName name='FEATURES'/>
    <div className={style.featurs}>
      <div className={style.featur}>
        <Image src={passion} alt='image' width={100} height={100} className={style.image} />
        <div className={style.info}>
          <h2 className={style.title1}>Blabla</h2>
          <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Laborum delectus, provident neque assumenda repellendus dolor voluptate nisi odit architecto cumque officia placeat non error corporis accusantium laboriosam</p>
        </div>
      </div>
      <div className={style.featur}>
        <Image src={quality} alt='image' width={100} height={100} className={style.image} />
        <div className={style.info}>
          <h2 className={style.title2}>Quality</h2>
          <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Laborum delectus, provident neque assumenda repellendus dolor voluptate nisi odit architecto cumque officia placeat non error corporis accusantium laboriosam</p>
        </div>
      </div>
      <div className={style.featur}>
        <Image src={time} alt='image' width={100} height={100} className={style.image} />
        <div className={style.info}>
          <h2 className={style.title3}>Time</h2>
          <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Laborum delectus, provident neque assumenda repellendus dolor voluptate nisi odit architecto cumque officia placeat non error corporis accusantium laboriosam</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Featurs
