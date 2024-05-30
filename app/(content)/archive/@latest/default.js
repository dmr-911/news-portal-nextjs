import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

const LatestArchive = async () => {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>LatestArchive</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestArchive;
