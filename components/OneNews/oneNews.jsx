import React from 'react'
import style from './oneNews.module.css'
import ApiError from "@/components/ApiError";    
    export default async function OneNews(props) {
      const titl=props.titl
      const cat=props.cat  
      const apikey = '208c26a7d317aa6068a5fcac4c60936b';
      const url = 'https://gnews.io/api/v4/top-headlines?category=' + cat + '&lang=en&country=us&max=100&apikey=' + apikey;
      let details;
      try {
        const add = await fetch(url,
          {
            next: {
              revalidate: 3600000000000,
            }
          });
    
        const addJson = await add.json();
        const articles = addJson.articles;
        const newsItem = articles.filter((news) => news.title.slice(0, titl.length) === titl)
        const myNews = newsItem[0];
        details =
          <>
            <div className={style.container}>
              <div className={style.address}>
                <div className={style.image}>
                  <img className={style.img} src={myNews.image} alt="news Image" />
                </div>
                <div className={style.tit}>
                  <h2 className={style.title}>{myNews.title}</h2>
                  <p>{myNews.description}</p>
                </div>
              </div>
              <div className={style.data}>
                <div className={style.content}>
                  <p>{myNews.content}</p>
                  <div>Link to the full news : <a>{myNews.url}</a></div>
                </div>
                <p className={style.publish}>{myNews.publishedAt}</p>
                <div className={style.source}>
                  <p> from : {myNews.source.name}</p>
                  <p>{myNews.source.url}</p>
                </div>
              </div>
              <div>
              </div>
            </div>
          </>
      }
      catch (error) {
        details = < ApiError/>
      }
      return (
        <div className={style.page}>
          <div>{details}</div>
        </div>
    
      )
    }
