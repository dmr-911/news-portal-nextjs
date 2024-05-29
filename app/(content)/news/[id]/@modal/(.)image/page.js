"use client";
import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

const InterceptedImageRoute = ({ params }) => {
  const newsItem = DUMMY_NEWS.find((item) => item.slug === params.id);

  if (!newsItem) {
    notFound();
  }

  const router = useRouter();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImageRoute;
