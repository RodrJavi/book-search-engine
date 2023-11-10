const { User } = require("../models");

const resolvers = {
  Query: {
    me: () => {
      return User.find({});
    },
  },
};

module.exports = resolvers;
