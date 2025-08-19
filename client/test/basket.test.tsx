import { render, screen, fireEvent } from "@testing-library/react";
import { BasketProvider, useBasket } from "../context/BasketContext";
import { ProductType } from "../types";
import { Component, ErrorInfo, ReactNode } from "react";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // prevent noisy logs in test output
    if (process.env.NODE_ENV === "test") return;
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return <div>{this.state.error.message}</div>;
    }

    return this.props.children;
  }
}

const mockProduct: ProductType = {
  id: 1,
  name: "Test Product",
  power: "100W",
  description: "A test product",
  price: 10,
  quantity: 5,
  brand: "TestBrand",
  weight: 1,
  height: 1,
  width: 1,
  length: 1,
  model_code: "T1",
  colour: "White",
  img_url: "",
};

const TestComponent = () => {
  const { addToBasket, totalItems, error } = useBasket();

  return (
    <div>
      <p>Total items: {totalItems}</p>
      {error && <p>{error}</p>}
      <button onClick={() => addToBasket(mockProduct, 1)}>Add to basket</button>
    </div>
  );
};

describe("BasketContext", () => {
  it("should add an item to the basket", () => {
    render(
      <BasketProvider>
        <TestComponent />
      </BasketProvider>
    );

    expect(screen.getByText("Total items: 0")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Add to basket"));

    expect(screen.getByText("Total items: 1")).toBeInTheDocument();
  });

  it("should not add an item to the basket if there is not enough stock", () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <BasketProvider>
          <TestComponent />
        </BasketProvider>
      </ErrorBoundary>
    );

    expect(screen.getByText("Total items: 0")).toBeInTheDocument();

    // Add 5 items (max stock)
    for (let i = 0; i < 5; i++) {
      fireEvent.click(screen.getByText("Add to basket"));
    }

    expect(screen.getByText("Total items: 5")).toBeInTheDocument();

    // Try to add one more (should trigger error)
    fireEvent.click(screen.getByText("Add to basket"));

    expect(screen.getByText("Not enough stock")).toBeInTheDocument();
    consoleErrorSpy.mockRestore();
  });
});
