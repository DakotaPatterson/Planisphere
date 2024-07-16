const { Profile } = require('../models');
const { Budget } = require('../models');
const { getVenues } = require('../utils/foursquare');

const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },

    getBudget: async () => {
      return await Budget.findOne();
    },
    getVenuesByEventType: async (_, { eventType, location }) => {
      try {
        return await getVenues(eventType, location);
      } catch (error) {
        console.error(`Failed to fetch venues: ${error.message}`);
        throw new Error('Failed to fetch venues');
    }
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
        throw AuthenticationError;
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw AuthenticationError;
    },

    setBudget: async (_, { totalBudget, categories }) => {
      const budget = await Budget.findOne();
      if (budget) {
        budget.totalBudget = totalBudget;
        budget.categories = categories;
        await budget.save();
        return budget;
      } else {
        const newBudget = new Budget({ totalBudget, categories });
        await newBudget.save();
        return newBudget;
      }
    },
  },
};

module.exports = resolvers;
