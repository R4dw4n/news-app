import React from 'react'
import TypeNews from '@/components/TypeNews'
import style from './News.module.css'
import data from '@/components/Navbar/data'
import Navbar from '@/components/Navbar'
const page = () => {
    // const all = data.map(item => { <TypeNews category={item.name}  count="7" /> })
    return (
        <div className={style.container}>
            <Navbar />
            <TypeNews category="business" count="7" id='business' />
            <TypeNews category="entertainment" count="7" id='entertainment' />
            <TypeNews category="health" count="7" id='health' />
            <TypeNews category="nation" count="7" id='nation' />
            <TypeNews category="science" count="7" id='science' />
            <TypeNews category="sports" count="7" id='sports' />
            <TypeNews category="technology" count="7" id='technology' />
            <TypeNews category="world" count="7" id='world' />
             
        </div>
    )
}

export default page
