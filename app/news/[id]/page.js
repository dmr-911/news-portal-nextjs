import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

const SoloNews = ({ params }) => {
  const newsItem = DUMMY_NEWS.find((item) => item.slug === params.id);
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default SoloNews;
