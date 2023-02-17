const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Player {
    _id: ID
    name: String
    igns: [String]!
  }

  type IGN {
    _id: ID
    IGN: String
    createdAt: String
  }

  type Query {
    user: User
    player: [Player]!
    player(profileId: ID!): Player
    ign: [IGN]!
    ign(ignId: ID!): IGN
  }
    type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }
  
    type Auth {
    token: ID
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addPlayer(firstName: String!, lastName: String!) : Player
    addIGN(playerId: ID!, IGN: String!): Player
    removePlayer(playerId: ID!): Player
    removeIGN(ignId: ID!): IGN
  }
`;

module.exports = typeDefs;
