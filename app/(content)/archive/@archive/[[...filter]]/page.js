import NewsList from "@/components/news/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

const FilterHeader = async ({ year, month }) => {
  let links = await getAvailableNewsYears();

  if (
    (year && (await !getAvailableNewsYears())) ||
    (month && (await !getAvailableNewsMonths(year).includes(month)))
  ) {
    throw new Error("Invalid filter");
  }

  if (year && !month) {
    links = await getAvailableNewsMonths(year);
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const FilteredNews = async ({ year, month }) => {
  let news;
  if (year && !month) {
    news = await getNewsForYear(selectedYear);
  } else if (year && month) {
    news = await getNewsForYearAndMonth;
  }

  let newsContent = <p>No news found for selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (year && !month) {
    news = await getNewsForYear(year);
  }

  if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  if (
    (year && (await !getAvailableNewsYears().includes(year))) ||
    (month && (await !getAvailableNewsMonths().includes(month)))
  ) {
    throw new Error("Invalid filter.");
    // notFound();
  }

  return newsContent;
};

const ArchiveYear = async ({ params }) => {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading header...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>

      {/* {newsContent} */}
      <Suspense fallback={<p>Loading contents..</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default ArchiveYear;
