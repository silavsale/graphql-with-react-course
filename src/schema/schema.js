const graphiql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } =
  graphiql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const users = [
  { id: '23', firstName: 'Bill', age: 20 },
  { id: '47', firstName: 'Jane', age: 30 },
  { id: '55', firstName: 'Joe', age: 43 },
];

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return users.find((user) => user.id === args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
