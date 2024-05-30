import { getAllNews } from "@/lib/news";
import { notFound } from "next/navigation";
import React from "react";

const ImageRoute = async ({ params }) => {
  const news = await getAllNews();
  const newsItem = news?.find((item) => item.slug === params.id);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImageRoute;
