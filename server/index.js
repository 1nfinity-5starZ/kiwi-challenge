const { ApolloServer, gql } = require("apollo-server");

const { expansions } = require("./resolvers/expansions");

const typeDefs = gql`
  type Expansion {
    numberSequence: String
    expansions: [String]
  }

  type Query {
    expansions(numberSequence: String!): Expansion
  }
`;

const resolvers = {
  Query: {
    expansions,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
