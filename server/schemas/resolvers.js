const { AuthenticationError } = require("apollo-server-express");
const { Profile, Menu } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    getAllItems: async () => {
      return await Menu.find({});
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },

    addMenuItem: async (
      parent,
      { name, price, description, imageUrl, category },
      context,
    ) => {
      if (context.user) {
        return await Menu.create({
          name,
          price,
          description,
          imageUrl,
          category,
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updateMenuItem: async (
      parent,
      { _id, name, price, description, imageUrl, category },
      context,
    ) => {
      if (context.user) {
        return await Menu.findByIdAndUpdate(
          _id,
          { name, price, description, imageUrl, category },
          { new: true },
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    deleteMenuItem: async (parent, { _id }, context) => {
      if (context.user) {
        return await Menu.findByIdAndDelete(_id);
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
