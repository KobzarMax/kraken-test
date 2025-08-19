import { render, fireEvent } from "@testing-library/react";
import ProductPage from "../pages/product/[id]";
import { ProductType } from "../types";

const mockProduct: ProductType = {
  id: 1,
  name: "Energy saving light bulb",
  description:
    "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
  price: 9.99,
  img_url: "/philips-plumen.jpg",
  power: "25W",
  quantity: 4,
  brand: "Philips",
  weight: 77,
  height: 12.6,
  width: 6.2,
  length: 6.2,
  model_code: "E27 ES",
  colour: "Cool daylight",
};

test("should be able to increase and decrease product quantity", async () => {
  const { getByText, getByTitle } = render(
    <ProductPage product={mockProduct} />
  );

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent("2");

  const decreaseQuantity = getByText("-");

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  const { getByText, getByTitle } = render(
    <ProductPage product={mockProduct} />
  );

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = getByText("Add to cart");
  fireEvent.click(addToBasketElement);

  const basketItems = getByTitle("Basket items");
  expect(basketItems).toHaveTextContent("4");
});

test("should render the correct initial state", () => {
  const { getByText, getByTitle, queryByTitle } = render(
    <ProductPage product={mockProduct} />
  );

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");

  const decreaseQuantityButton = getByText("-");
  expect(decreaseQuantityButton).toBeDisabled();

  const basketItems = queryByTitle("Basket items");
  expect(basketItems).not.toBeInTheDocument();
});

test("should not decrease quantity below 1", () => {
  const { getByText, getByTitle } = render(
    <ProductPage product={mockProduct} />
  );

  const decreaseQuantityButton = getByText("-");
  fireEvent.click(decreaseQuantityButton);

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");
});

test("should render all product information", () => {
  const { getByText } = render(<ProductPage product={mockProduct} />);

  expect(getByText(mockProduct.name)).toBeInTheDocument();
  expect(
    getByText(`${mockProduct.power} // Packet of ${mockProduct.quantity}`)
  ).toBeInTheDocument();
  expect(getByText("£9.99")).toBeInTheDocument();
  expect(getByText(mockProduct.description)).toBeInTheDocument();
  expect(getByText(mockProduct.brand)).toBeInTheDocument();
  expect(getByText(mockProduct.weight.toString())).toBeInTheDocument();
  expect(
    getByText(
      `${mockProduct.height} x ${mockProduct.width} x ${mockProduct.length}`
    )
  ).toBeInTheDocument();
  expect(getByText(mockProduct.model_code)).toBeInTheDocument();
  expect(getByText(mockProduct.colour)).toBeInTheDocument();
});
