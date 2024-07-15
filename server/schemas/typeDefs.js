const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Category {
    name: String
    amount: Float
  }

  type Budget {
    id: ID
    totalBudget: Float
    categories: [Category]
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    getBudget: Budget
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeProfile: Profile
     setBudget(totalBudget: Float, categories: [CategoryInput]): Budget
  }


  input CategoryInput {
    name: String
    amount: Float
  }
`;

module.exports = typeDefs;
