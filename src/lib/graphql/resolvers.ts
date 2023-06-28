import { Resolvers } from '../../generated/graphql';

const resolvers: Resolvers = {
  Query: {
    // TODO: Newtから記事の一覧を取得するAPIを叩く
    articles: () => {
      return [
        {
          _id: '1',
          title: 'Sample Article 1',
          slug: 'sample-slug',
          body: 'This is a sample article.',
          author: 'koralle',
          meta: {
            title: 'Sample meta title',
            description: 'Sample meta description',
          },
        },
      ];
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
