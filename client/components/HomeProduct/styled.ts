import styled from "styled-components";

export const ProductContainer = styled.article`
  border: 1px solid var(--sohoLights);
  border-radius: 8px;
  padding: 8px;
  transition: transform 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const ProductName = styled.h2`
  font-size: 18px;
`;

export const ProductDescription = styled.p`
  opacity: 0.8;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: var(--ice);
`;

export const ProductLink = styled.a`
  position: absolute;
  inset: 0;
`;
