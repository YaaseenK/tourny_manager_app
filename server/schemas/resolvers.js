const { Player } = require('../models');

const resolvers = {
  Query: {
    player: async () => {
      return Player.find();
    },

    player: async (parent, { profileId }) => {
      return Player.findOne({ _id: profileId });
    },
  },

  Mutation: {
    addPlayer: async (parent, { name }) => {
      return Player.create({ name });
    },
    addIGN: async (parent, { playerId, skill }) => {
      return Player.findOneAndUpdate(
        { _id: playerId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removePlayer: async (parent, { playerId }) => {
      return Player.findOneAndDelete({ _id: playerId });
    },
    removeIGN: async (parent, { playerId, skill }) => {
      return Player.findOneAndUpdate(
        { _id: playerId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
