const { AuthenticationError } = require('apollo-server-express');
const { User, Ign, Player } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    player: async () => {
      return Player.find();
    },

    player: async (parent, { profileId }) => {
      return Player.findOne({ _id: profileId });
    },
     user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'players.ign',
          populate: ''
        });

        user.ign.sort((a, b) => b.tournamentDate - a.tournamentDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
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
        login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
  },
};

module.exports = resolvers;
