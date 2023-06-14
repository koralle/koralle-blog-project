import { getArticleBySlug, getArticles } from '@/lib/newt';

const Article = async ({ params }) => {
  const { slug } = params;
  const article = await getArticleBySlug(slug);

  if (!article) return;

  return (
    <>
      <main>
        <h1>{article?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.body }} />
      </main>
    </>
  );
};

export default Article;

export const generateStaticParams = async () => {
  const articles = await getArticles();

  return articles.map(article => {
    article.slug;
  });
};
