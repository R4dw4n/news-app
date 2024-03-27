import MoreNews from '@/components/MoreNews/MoreNews'
import Name from '@/components/TypeNews/Name/Name';
import React from 'react'
import style from  '../page.module.css'
const page = (props) => {
    const news = "business";
    return (
    <div className={style.cont}>
        <Name name={news} />
      <MoreNews category={news} count='20' />
    </div>
  )
}

export default page
