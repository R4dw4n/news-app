''
import data from './data'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { Salsa } from 'next/font/google'
const salsa = Salsa({ subsets: ['latin'], weight: ['400'] })
const index = () => {
  const nav = data.map((item, ind) => {
    return (

      <div className={salsa.className} key={ind}>
        <a className={styles.link} href={item.url}>{item.name}</a>
      </div>

    )
  })
  return (
    <div className={styles.navbar}>
      <div className={styles.items}>{nav}</div>

    </div>
  )
}

export default index
