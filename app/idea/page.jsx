import Image from 'next/image'
import React from 'react'
import style from './idea.module.css'
import Suggestion from '@/components/Suggestion/Suggestion'
import img from "../../components/assist/Pictofigo_-_Idea.png"
const page = () => {
    return (
        <div className={style.idea}>
            <div className={style.qus}>
                <div className={style.sqr}>
                    <h2>Do you have a Suggestion?</h2>
                </div>
            </div>
                <div className={style.personal}>
                    <div className={style.firstSec}>
                        <div className={style.perTit}>
                            <h2 >Share your opinion with us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, cum ullam? Laborum delectus, provident neque assumenda repellendus dolor voluptate nisi odit architecto cumque officia placeat non error corporis accusantium laboriosam</p>
                            <Image src={img} className={style.img} width={200}  height={300}/>
                        </div>
                    </div>
                    <Suggestion />
                </div>
            </div>
    )
}

export default page
