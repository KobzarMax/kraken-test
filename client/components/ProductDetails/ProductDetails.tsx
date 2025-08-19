import { useBasket } from "../../context/BasketContext";
import { ProductType } from "../../types";
import { priceFormatter } from "../../utils";
import {
  AddToCartButton,
  DismissButton,
  ErrorMessageContainer,
  ErrorMessageText,
  PriceContainer,
  ProductImage,
  ProductImageContainer,
  ProductInfo,
  ProductName,
  ProductPower,
  ProductPrice,
  ProductSection,
  QuantityButton,
  QuantityContainer,
  QuantityValue,
  QuantityWrapper,
} from "./styled";

type ProductDetailsProps = {
  product: ProductType;
  quantity: number;
  setQuantity: (prev: (prevState: number) => number) => void;
  handleAddToCart: () => void;
};

export default function ProductDetails({
  product,
  quantity,
  setQuantity,
  handleAddToCart,
}: ProductDetailsProps) {
  const { error, clearError } = useBasket();
  return (
    <ProductSection>
      <ProductImageContainer>
        <ProductImage
          src={product.img_url}
          alt={`Product image of ${product.name}`}
        />
      </ProductImageContainer>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPower>
          {product.power} // Packet of {product.quantity}
        </ProductPower>
        <PriceContainer>
          <ProductPrice>{priceFormatter.format(product.price)}</ProductPrice>
          <QuantityWrapper>
            <span>Qty</span>
            <QuantityContainer>
              <QuantityButton
                aria-label="Decrease quantity"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                disabled={quantity <= 1}
              >
                -
              </QuantityButton>
              <QuantityValue title="Current quantity">{quantity}</QuantityValue>
              <QuantityButton
                onClick={() => setQuantity((prevState) => prevState + 1)}
              >
                +
              </QuantityButton>
            </QuantityContainer>
          </QuantityWrapper>
        </PriceContainer>
        <AddToCartButton onClick={handleAddToCart}>Add to cart</AddToCartButton>
        {error && (
          <ErrorMessageContainer>
            <ErrorMessageText>{error}</ErrorMessageText>
            <DismissButton onClick={clearError}>Dismiss</DismissButton>
          </ErrorMessageContainer>
        )}
      </ProductInfo>
    </ProductSection>
  );
}
