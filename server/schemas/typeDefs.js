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
    player: [Player]!
    player(profileId: ID!): Player
    ign: [IGN]!
    ign(ignId: ID!): IGN
  }

  type Mutation {
    addPlayer(firstName: String!, lastName: String!) : Player
    addIGN(playerId: ID!, IGN: String!): Player
    removePlayer(playerId: ID!): Player
    removeIGN(ignId: ID!): IGN
  }
`;

module.exports = typeDefs;
