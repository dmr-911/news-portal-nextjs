import React from "react";
import { notFound } from "next/navigation";
import ModalBackDrop from "@/components/modal/modal-backdrop";
import { getAllNews } from "@/lib/news";

const InterceptedImageRoute = async ({ params }) => {
  const news = await getAllNews();
  const newsItem = news?.find((item) => item.slug === params.id);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackDrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImageRoute;
