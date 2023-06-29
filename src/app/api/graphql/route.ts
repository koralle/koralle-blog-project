import { readFileSync } from 'node:fs';

import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest, NextResponse } from 'next/server';

import { resolvers } from '@/lib/graphql/resolvers';

const typeDefs = readFileSync('./schemas/schema.graphql', { encoding: 'utf-8', flag: 'r' });

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server);
//
const GET = async (request: NextRequest) => {
  return handler(request);
};

const POST = async (request: NextRequest) => {
  return handler(request);
};

export { GET, POST };
