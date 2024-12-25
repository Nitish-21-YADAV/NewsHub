import React, { useEffect, useState } from "react";
import NewsItemcard1 from "./NewsItemcard1";
import NewsItem from "./NewsItem";

function Newsboard({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchNews = async () => {
      try {
  
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the news data:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (articles.length === 0) {
    return <div>No news available.</div>;
  }

  const [firstNews, ...restNews] = articles;

  return (
    <div className="news-container" style={{ display: "flex", height: "100%", width: "100%", border: "2px solid green", overflow: "scroll", scrollbarWidth: "none" }}>
      <div className="left-component" style={{ width: "max-content", position: "relative" }}>
        <NewsItemcard1
          title={firstNews.title}
          description={firstNews.description}
          scr={firstNews.urlToImage}
          url={firstNews.url}
        />
      </div>
      <div className="right-component" style={{ position: "relative", width: "55%", left: "40%" }}>
        {restNews.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            scr={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Newsboard;
