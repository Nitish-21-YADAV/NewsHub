import React, { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";
import NewsItemcard1 from "./NewsItemcard1";

function Newsboard(){

    const [articles,setArticles]=useState([]);
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    },[]);
    
    const [firstNews, ...restNews] = articles;   
    console.log(firstNews);
    console.log("newsboard copy wala ");
    console.log(restNews);
    console.log("data copy is ready between ");

    return(
        <>
        <NewsItemcard1 title={firstNews.title} description={firstNews.description} scr={firstNews.urlToImage} url={firstNews.url} news={firstNews}/>
        {restNews.map((restNews,index)=>
        {
            <NewsItem key={index} title={restNews.title} description={restNews.description} scr={restNews.urlToImage} url={restNews.url} news={restNews}/>
        })};

        </>
    )

}

export default Newsboard;

