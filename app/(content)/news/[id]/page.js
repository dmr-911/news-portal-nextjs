import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllNews, getNewsItem } from "@/lib/news";

const NewsDetailPage = async ({ params }) => {
  const news = await getAllNews();
  const newsSlug = params.id;
  const newsItem =
    (news.length > 0 &&
      news?.find((newsItem) => newsItem?.slug === newsSlug)) ||
    {};

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetailPage;
