import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        email
      }
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile($email: String!, $password: String!) {
    addProfile(email: $email, password: $password) {
      token
      profile {
        _id
        email
      }
    }
  }
`;

export const ADD_MENU_ITEM = gql`
  mutation addMenuItem(
    $name: String!
    $price: Float!
    $description: String!
    $imageUrl: String
    $category: String!
  ) {
    addMenuItem(
      name: $name
      price: $price
      description: $description
      imageUrl: $imageUrl
      category: $category
    ) {
      _id
      name
      price
      description
      imageUrl
      category
    }
  }
`;

export const UPDATE_MENU_ITEM = gql`
  mutation updateMenuItem(
    $_id: ID!
    $name: String
    $price: Float
    $description: String
    $imageUrl: String
    $category: String
  ) {
    updateMenuItem(
      _id: $_id
      name: $name
      price: $price
      description: $description
      imageUrl: $imageUrl
      category: $category
    ) {
      _id
      name
      price
      description
      imageUrl
      category
    }
  }
`;

export const DELETE_MENU_ITEM = gql`
  mutation deleteMenuItem($_id: ID!) {
    deleteMenuItem(_id: $_id) {
      _id
    }
  }
`;
