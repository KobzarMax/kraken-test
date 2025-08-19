import { gql } from "@apollo/client";

export const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: ID!) {
    Product(id: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query getAllProducts {
    allProducts {
      id
      name
      power
      description
      brand
      price
      img_url
      model_code
    }
  }
`;
