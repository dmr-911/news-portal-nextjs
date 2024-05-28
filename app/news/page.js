import Link from "next/link";
import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

const News = () => {
  return (
    <div>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
                fill
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
