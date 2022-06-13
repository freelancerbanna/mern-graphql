const { clients, projects } = require("../dummyData");

const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
} = require("graphql");

//client object types
const ClientType = new GraphQLObjectType({
  name: "Clien",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.find((client) => client.id === args.id);
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
});
