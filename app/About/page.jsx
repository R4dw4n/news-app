import React from 'react'
import style from './about.module.css'
import Featurs from '../../components/Featurs/index'
import Comment from '@/components/Comment/Comment'
import Pricing from '@/components/Pricing/Pricing'
const page = () => {
  return (
    <div className={style.container}>
      <Featurs />
      <Pricing />
      <Comment />
    </div>
  )
}

export default page
