const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    email: String
    password: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Menu {
    _id: ID
    name: String
    price: Float
    description: String
    imageUrl: String
    category: String
  }

  type Query {
    me: Profile

    getAllItems: [Menu]
  }

  type Mutation {
    addProfile(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addMenuItem(
      name: String!
      price: Float!
      description: String!
      imageUrl: String
      category: String!
    ): Menu

    updateMenuItem(
      _id: ID!
      name: String
      price: Float
      description: String
      imageUrl: String
      category: String
    ): Menu

    deleteMenuItem(_id: ID!): Menu
  }
`;

module.exports = typeDefs;
