import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import Server from 'next/dist/next-server/server/next-server';

const typeDefs = gql`
  type Query {
    hello: String!
  }

  type Farm {
    id: ID!
    name: String
    website: String
    products: [Product]
  }

  type Product {
    type: String
  }
`;

const resolvers = {
  Query: {
    hello: (_parent, _args, _ctx) => {
      return 'hey';
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  const app = express();

  apolloServer.applyMiddleware({ app });

  app.listen(5000, () => console.log('hello on 5000'));
};

startServer();

export default (req, res) => {
  res.end('hello from farms');
};
