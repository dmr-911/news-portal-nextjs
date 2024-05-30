import React from "react";
import NewsList from "@/components/news/news-list";
import { getAllNews } from "@/lib/news";

const News = async () => {
  // const response = await fetch("http://localhost:8080/news");
  // if (!response.ok) {
  //   throw new Error("Failed to fetch news.");
  // }

  // const news = await response.json();
  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={getAllNews()} />
    </div>
  );
};

export default News;
