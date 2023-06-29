import { Resolvers } from '../../generated/graphql';
import { getArticles } from '@/lib//newt';

const resolvers: Resolvers = {
  Query: {
    // TODO: Newtから記事の一覧を取得するAPIを叩く
    articles: async () => {
      return await getArticles();
    },
    // TODO: Newtから著者の一覧を取得するAPIを叩く
    authors: () => {
      return [];
    },
    // TODO: Newtからカテゴリーの一覧を取得するAPIを叩く
    categories: () => {
      return [];
    },
  },
};

export { resolvers };
