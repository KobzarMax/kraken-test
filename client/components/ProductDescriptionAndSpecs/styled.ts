import styled from "styled-components";

export const DescriptionAndSpecsContainer = styled.div`
  color: #ffffff;
  margin-top: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

export const SpecificationsList = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ProductPageDescription = styled.div`
  padding: 1rem;
  background-color: var(--hemocyanin);
  margin-bottom: 1rem;
`;

export const ProductPageSpecifications = styled.div`
  padding: 1rem;
`;

export const SpecificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #5a4b7f;
`;

export const SpecificationName = styled.p`
  font-weight: bold;
`;

export const SpecificationValue = styled.p`
  color: #b0a9bd;
`;
