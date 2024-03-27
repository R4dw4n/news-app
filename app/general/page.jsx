import MoreNews from '@/components/MoreNews/MoreNews'
import Name from '@/components/TypeNews/Name/Name';
import React from 'react'
import style from  '../page.module.css'
const page = (props) => {
    const news = "general";
    console.log(`${news} mmmm`)
    return (
    <div className={style.cont}>
        <Name name={news} />
      <MoreNews category="general" count='10' />
    </div>
  )
}

export default page
