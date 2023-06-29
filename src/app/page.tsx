import type { NextPage } from 'next';
import Link from 'next/link';

import { getArticles } from '@/lib/newt';

import { Mugicha } from './_components/Mugicha';

const Home: NextPage = async () => {
  const articles = await getArticles();

  return (
    <>
      <div>
        <h1>最新のエントリ</h1>
      </div>
    </>
  );
};

export default Home;
