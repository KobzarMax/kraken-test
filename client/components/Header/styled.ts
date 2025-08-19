import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding: 8px 12px;
  }
`;

export const HeaderButton = styled.button`
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
  position: relative;
`;

export const HeaderBasket = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 1200px) {
    width: 24px;
    height: 24px;
  }
`;

export const BasketQuantity = styled.span`
  font-size: 16px;
  background-color: var(--sohoLights);
  color: var(--hemocyanin);
  font-weight: 700;
  border-radius: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  @media (max-width: 1200px) {
    font-size: 12px;
    width: 16px;
    height: 16px;
  }
`;
