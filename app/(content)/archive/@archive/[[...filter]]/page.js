import NewsList from "@/components/news/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const ArchiveYear = async ({ params }) => {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
  }

  let newsContent = <p>No news found for selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  let links = await getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = await getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  if (
    (selectedYear && (await !getAvailableNewsYears().includes(selectedYear))) ||
    (selectedMonth && (await !getAvailableNewsMonths().includes(selectedMonth)))
  ) {
    throw new Error("Invalid filter.");
    // notFound();
  }
  return (
    <>
      <header>
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default ArchiveYear;
