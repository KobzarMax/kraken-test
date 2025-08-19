import styled from "styled-components";

export const ProductSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  color: #ffffff;
  border-radius: 15px 15px 0 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

export const ProductImageContainer = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  border-radius: 15px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProductName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const ProductPower = styled.p`
  font-size: 1rem;
  color: #b0a9bd;
  margin-bottom: 1rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem 0;
  border-bottom: 1px solid #5a4b7f;
`;

export const ProductPrice = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  //   background-color: #5a4b7f;
  border-radius: 50px;
`;

export const QuantityButton = styled.button`
  background: var(--sohoLights);
  border-radius: 16px;
  width: 40px;
  height: 40px;
  border: none;
  color: var(--siphon);
  font-size: 1.5rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }
`;

export const QuantityValue = styled.p`
  padding: 0 1rem;
  color: #ffffff;
  font-size: 20px;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: var(--sohoLights);
  color: var(--siphon);
  border: none;
  border-radius: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ErrorMessageContainer = styled.div`
  background-color: #ff6347; /* A shade of red for errors */
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const ErrorMessageText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

export const DismissButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;
