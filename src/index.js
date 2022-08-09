import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
    }
  `,
});

server.listen(3003).then(({ url }) => {
  console.log(`Server running at: ${url}`);
});
