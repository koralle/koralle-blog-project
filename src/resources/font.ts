import { Noto_Sans_JP } from 'next/font/google';

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--noto-sans-jp',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  weight: ['400', '700', '900'],
});

export { notoSansJp };
