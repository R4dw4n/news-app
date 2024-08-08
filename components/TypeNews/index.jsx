import styles from './News.module.css'
import Link from 'next/link';
import { GoArrowLeft } from "react-icons/go";
import Name from './Name/Name';
import ApiError from '../ApiError';
import { IconName } from "react-icons/hi";
export default async function TypeNews(props) {
  const title = props.tet;
  const count = props.count;
  let tit;
  const cat = props.category;
  console.log(cat)
  const firstL = cat.slice(0, 2);
  const apikey = '208c26a7d317aa6068a5fcac4c60936b';
  const url = 'https://gnews.io/api/v4/top-headlines?category=' + cat + '&lang=en&country=us&max=20&apikey=208c26a7d317aa6068a5fcac4c60936b' ;
   try {
    const add = await fetch(url,
      {
        next: {
          revalidate: 3600000000000000,
        }
      });

    const addJson = await add.json();
    const articles = addJson.articles;
    tit = articles.map((item, ind) => {
      return (
        <Link href={`/${firstL}${item.title}`} key={ind}>
          <div className={styles.newsTitle}>
            <div className={styles.onhover}>
              <div className={styles.infoTitle}>
                <h2>{item.title}</h2>
              </div>
              <img src={item.image} alt='image news' />
            </div>
          </div>
        </Link>
      )
    })
  }
  catch {
    tit = <ApiError />
  }
  return (
    <div className={styles.container}>
      <Name name={cat} />
      <div id="titls" className={styles.allTitls}>
        {tit}
      </div>
      <div className={styles.more}><Link href={`/${cat}`}>See More</Link><span className={styles.arow}>< GoArrowLeft/></span></div>
    </div>
  )
}

