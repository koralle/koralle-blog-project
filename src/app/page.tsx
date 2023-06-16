import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { getArticles } from '../lib/newt';
import { Mugicha } from './_components/Mugicha';

const Home: NextPage = async () => {
  const articles = await getArticles();

  return (
    <>
      <Head>
        <title>Newt・Next.jsブログ</title>
        <meta
          name='description'
          content='NewtとNext.jsを利用したブログです'
        />
      </Head>
      <main>
        <h1>Hello, Newt!!</h1>
        <h2>Three.js</h2>
        <Mugicha />
        <ul>
          {articles.map(article => {
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
