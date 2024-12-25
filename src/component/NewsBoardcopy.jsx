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
    // console.log(articles);   
    console.log(firstNews);
    console.log("newsboard copy wala ");
    console.log(restNews);
    // console.log(typeof(restNews));
    console.log("data copy is ready between ");

    return(
        <>
        {/* <NewsItem news={firstNews}/> */}
        <NewsItemcard1 title={firstNews.title} description={firstNews.description} scr={firstNews.urlToImage} url={firstNews.url} news={firstNews}/>
        {restNews.map((restNews,index)=>
        {
            <NewsItem key={index} title={restNews.title} description={restNews.description} scr={restNews.urlToImage} url={restNews.url} news={restNews}/>
        })};

        </>
    )


    // return(
    //     <div>
    //         {/* <h2 className="text-center">Top<span className="badge bg-danger">Heading</span></h2> */}
    //         <>
    //         {articles.map((restNews,index)=>{
    //             return <NewsItemcard1 key={index} title={restNews.title} description={restNews.description} scr={restNews.urlToImage} url={restNews.url}/>
                    
    //             // return <>
    //             {/* <NewsItemcard1 news={firstNews}/> */}
    //             {/* <NewsItem news={{...restNews}}/> */}
    //             // </>
    //         })};
    //         </>
            
    //     </div>
        
    // )

    // const [firstNews, ...restNews] = articles;
    // return (
    //   <div className="news-container">
    //     {/* <div className="left-component"> */}
    //       <NewsItemcard1 news={firstNews} />
    //     {/* </div> */}
    //     {/* <div className="right-component"> */}
    //       <NewsItem news={restNews} />
    //     {/* </div> */}
    //   </div>
    // );
}

export default Newsboard;





/*--------------------------------------------------extra copy -------------------------------------

import React, { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

function Newsboard({category}){

    const [articles,setArticles]=useState([]);
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    },[category]);

    return(
        <div>
            <h2 className="text-center">Top<span className="badge bg-danger">Heading</span></h2>
            <>
            {articles.map((news,index)=>{
                return <NewsItem key={index} title={news.title} description={news.description} scr={news.urlToImage} url={news.url}/>
            })};
            </>
        </div>
    )
}

export default Newsboard;

*/