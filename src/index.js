import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => {
        return 'Hello Again!';
      },
    },
  },
});

server.listen(3003).then(({ url }) => {
  console.log(`Server running at: ${url}`);
});
