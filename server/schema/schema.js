const Client = require("../models/Client");
const Project = require("../models/Project");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

// defining client type
const ClientType = new GraphQLObjectType({
  name: "ClientType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});
// defining project type

const ProjectType = new GraphQLObjectType({
  name: "ProjectType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    status: { type: GraphQLString },
    description: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

// root query
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: () => ({
    // client query
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    // project query
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.find(args.id);
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      },
    },
  }),
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: () => ({
    // client mutation methods
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });
        return client.save();
      },
    },
    updateClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const client = await Client.findByIdAndUpdate(args.id, {
          name: args.name,
          email: args.email,
          phone: args.phone,
        });
        return client;
      },
    },
    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Client.findByIdAndRemove(args.id);
      },
    },
    // product mutation methods
    addProduct: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

// const {
//   GraphQLID,
//   GraphQLString,
//   GraphQLObjectType,
//   GraphQLNonNull,
//   GraphQLSchema,
//   GraphQLList,
// } = require("graphql");

// // project object types
// const ProjectType = new GraphQLObjectType({
//   name: "Project",
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     status: { type: GraphQLString },
//     description: { type: GraphQLString },
//     client: {
//       type: ClientType,
//       resolve(parent, args) {
//         return Client.findById(parent.clientId);
//       },
//     },
//   }),
// });

// //client object types
// const ClientType = new GraphQLObjectType({
//   name: "Client",
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     email: { type: GraphQLString },
//     phone: { type: GraphQLString },
//   }),
// });

// // mutating every point
// const RootMutation = new GraphQLObjectType({
//   name: "RootMutation",
//   fields: {
//     addClient: {
//       type: ClientType,
//       args: {
//         name: { type: GraphQLNonNull(GraphQLString) },
//         email: { type: GraphQLNonNull(GraphQLString) },
//         phone: { type: GraphQLNonNull(GraphQLString) },
//       },
//       resolve(parent, args) {
//         const client = new Client({
//           name: args.name,
//           email: args.email,
//           phone: args.phone,
//         });
//         return client.save();
//       },
//     },
//     addProject:{
//       type:ProjectType,

//     }
//   },
// });

// // query every point
// const RootQuery = new GraphQLObjectType({
//   name: "RootQuery",
//   fields: {
//     projects: {
//       type: new GraphQLList(ProjectType),
//       resolve(parent, args) {
//         return Project.find();
//       },
//     },
//     project: {
//       type: ProjectType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         return Project.findById(args.id);
//       },
//     },
//     clients: {
//       type: new GraphQLList(ClientType),
//       resolve(parent, args) {
//         return Client.find();
//       },
//     },
//     client: {
//       type: ClientType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         return Client.findById(args.id);
//       },
//     },
//   },
// });
// module.exports = new GraphQLSchema({
//   query: RootQuery,
//   mutation: RootMutation,
// });
