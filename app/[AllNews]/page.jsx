import React from 'react';
import style from './AllNews.module.css'
import OneNews from '@/components/OneNews/oneNews';
import Name from '../../components/TypeNews/Name/Name';
import MoreNews from '@/components/MoreNews/MoreNews';
import TypeNews from '@/components/TypeNews';
import Assess from '@/components/Assess/Assess';
function AllNews(props) {
  const news = props.params.AllNews;
  console.log(news)
  const stop = news.indexOf('%');
  const titl = news.slice(2, stop);
  const first = news[0] + news[1];
  let cat;
  if (first === 'sp') cat = 'sports';
  else if (first === 'bu') cat = 'business';
  else if (first === 'en') cat = 'enterainment';
  else if (first === 'he') cat = 'health';
  else if (first === 'na') cat = 'nation';
  else if (first === 'sc') cat = 'science';
  else if (first === 'te') cat = 'technology';
  else if (first === 'wo') cat = 'world';
  return (
    <div className={style.container}>
      <Name name={cat} />
      <OneNews titl={titl} cat={cat} />
      <MoreNews category={cat} count="10"  />
      {/* <Assess/> */}
    </div>
  );
}

export default AllNews;