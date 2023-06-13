import Head from "next/head";
import Link from "next/link";

import { getArticles } from "@/lib/newt";
import type { Article } from "@/types/article";

const Home = async () => {
  const articles = await getArticles();

  return (
    <>
      <Head>
        <title>Newt・Next.jsブログ</title>
        <meta name="description" content="NewtとNext.jsを利用したブログです" />
      </Head>
      <main>
        <h1>Hello, Newt!!</h1>
        <ul>
          {articles.map((article) => {
            return (
              <li key={article._id}>
                <Link href={`articles/${article.slug}`}>{article.title}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Home;
