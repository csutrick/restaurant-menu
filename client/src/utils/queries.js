import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
    }
  }
`;

export const QUERY_MENU_ITEMS = gql`
  query getMenuItems {
    getMenuItems {
      _id
      name
      price
      description
      imageUrl
      category
    }
  }
`;
