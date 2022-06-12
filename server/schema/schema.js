const { projects, clients } = require("../dummyData");

const { GraphQLString, GraphQLID, GraphQLObjectType } = require("graphql");

// client types

const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQL();
