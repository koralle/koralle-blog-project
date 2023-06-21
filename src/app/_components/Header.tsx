import { FC } from 'react';

import styles from '../_styles/components/Header.module.scss';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className={`${styles.header}`}>
      <Link href='/'>むぎちゃのお布団</Link>
    </header>
  );
};

export { Header };
