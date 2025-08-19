import { createContext, useContext, useState, ReactNode } from "react";
import { ProductType } from "../types";

type BasketItem = {
  product: ProductType;
  quantity: number;
};

type BasketContextType = {
  basket: BasketItem[];
  addToBasket: (product: ProductType, quantity: number) => void;
  totalItems: number;
  error: string | null;
  clearError: () => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const addToBasket = (product: ProductType, quantity: number) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        if (existingItem.quantity + quantity > product.quantity) {
          setError("Not enough stock");
          return prevBasket;
        }
        setError(null);
        return prevBasket.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        if (quantity > product.quantity) {
          setError("Not enough stock");
          return prevBasket;
        }
        setError(null);
        return [...prevBasket, { product, quantity }];
      }
    });
  };

  const totalItems = basket.reduce((total, item) => total + item.quantity, 0);

  const clearError = () => setError(null);

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, totalItems, error, clearError }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};
