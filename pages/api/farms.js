import { ApolloServer, gql } from 'apollo-server-micro';
import { makeExecutableSchema } from 'graphql-tools';
import { MongoClient } from 'mongodb';

const connection_string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ii9ft.mongodb.net/farm-fresh?retryWrites=true&w=majority`;

const typeDefs = gql`
  type Farm {
    id: ID!
    name: String
  }

  type Product {
    type: String
  }

  type Query {
    farms: [Farm]
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: (_parent, _args, _ctx) => {
      return 'hey';
    },

    farms: (_parent, _args, _ctx) => {
      return _ctx.db
        .collection('farms')
        .findOne()
        .then((data) => data.farms);
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

let db;

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(connection_string, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        if (!dbClient.isConnected()) {
          console.log('connecting...');
          await dbClient.connect();
        }
        db = dbClient.db('farm-fresh');
      } catch (err) {
        console.log('error connecting to mongo', err);
      }
    }

    return { db };
  },
});

const handler = apolloServer.createHandler({ path: '/api/farms' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
