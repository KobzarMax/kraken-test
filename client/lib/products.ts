import { ProductType } from "../types";

const productByIdQuery = `
  query ($id: ID!) {
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

const allProductsQuery = `
  query {
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

type GetProductByIdResponse = {
  data: {
    Product: ProductType;
  };
};

type GetAllProductsResponse = {
  data: {
    allProducts: Partial<ProductType>[];
  };
};

export const getProductById = async (
  productId: number
): Promise<ProductType> => {
  const response = await fetch("http://localhost:3001/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: productByIdQuery,
      variables: { id: productId },
    }),
  });

  if (!response.ok) {
    throw new Error(`Network error: ${response.statusText}`);
  }

  const json: GetProductByIdResponse = await response.json();

  if (!json.data || !json.data.Product) {
    throw new Error("Product not found in response");
  }

  return json.data.Product;
};

export const getAllProducts = async (): Promise<Partial<ProductType>[]> => {
  const response = await fetch("http://localhost:3001/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: allProductsQuery,
    }),
  });

  if (!response.ok) {
    throw new Error(`Network error: ${response.statusText}`);
  }

  const json: GetAllProductsResponse = await response.json();

  if (!json.data || !json.data.allProducts) {
    throw new Error("Product not found in response");
  }

  return json.data.allProducts;
};
