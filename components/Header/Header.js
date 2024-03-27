"use client"
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";
import React, { useEffect, useState } from 'react'
import style from './Header.module.css'
import Link from 'next/link'
import logo from "../../components/assist/1661088.png"
import { Salsa } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { IoCloseSharp } from "react-icons/io5";
const salsa = Salsa({ subsets: ['latin'], weight: ['400'] })

const Header = () => {
  const router = usePathname();
  const [isHidden, SetIsHidden] = useState(true)
  let [click, setClick] = useState(1)

  const handelNav = () => {
    SetIsHidden(!isHidden)
  }

  const rout = router;
 useEffect(()=>{
  if (rout === "/") setClick(1);
  else if (rout === "/idea") setClick(4);
  else if (rout === "/About") setClick(3);
  else setClick(2);
})

  return (
    <div className={style.header}>
      <div className={style.logo}><Link href='/'><Image src={logo} width={60} height={56} /></Link></div>
      <div className={salsa.className}>
        <ul className={`${style.nav} ${isHidden ? style.hidden : ''}`}>
          <li className={click === 1 ? style.click : ""}><Link className={style.link} href='/' key='1'>Home</Link></li>
          <li className={click === 2 ? style.click : ""}><Link className={style.link} href='/News' key='2'>News</Link></li>
          <li className={click === 3 ? style.click : ""}><Link className={style.link} href='/About' key='3'>About Us</Link></li>
          <li className={click === 4 ? style.click : ""}><Link className={style.link} href='/idea' key='1'>Suggestion</Link></li>
        </ul>
        <div className={style.icon} onClick={handelNav}>{(isHidden) ?<FiAlignJustify /> :<IoCloseSharp />}</div>
      </div>
    </div>
  );
}

export default Header
