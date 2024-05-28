import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <div>
      <Link href="/news/news-1">News 1</Link>
      <Link href="/news/news-2">News 2</Link>
      <Link href="/news/news-3">News 3</Link>
    </div>
  );
};

export default News;
