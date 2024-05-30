import React from "react";
import NewsList from "@/components/news/news-list";
import { getAllNews } from "@/lib/news";

const News = async () => {
  const news = await getAllNews();
  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={news} />
    </div>
  );
};

export default News;
