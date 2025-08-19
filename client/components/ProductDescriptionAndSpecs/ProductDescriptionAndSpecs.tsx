import { ProductType } from "../../types";
import {
  DescriptionAndSpecsContainer,
  DescriptionText,
  ProductPageDescription,
  ProductPageSpecifications,
  SectionTitle,
  SpecificationItem,
  SpecificationName,
  SpecificationsList,
  SpecificationValue,
} from "./styled";

type ProductDescriptionAndSpecsProps = {
  product: ProductType;
};

export default function ProductDescriptionAndSpecs({
  product,
}: ProductDescriptionAndSpecsProps) {
  return (
    <DescriptionAndSpecsContainer>
      <ProductPageDescription>
        <SectionTitle>Description</SectionTitle>
        <DescriptionText>{product.description}</DescriptionText>
      </ProductPageDescription>
      <ProductPageSpecifications>
        <SectionTitle>Specifications</SectionTitle>
        <SpecificationsList>
          <SpecificationItem>
            <SpecificationName>Brand</SpecificationName>
            <SpecificationValue>{product.brand}</SpecificationValue>
          </SpecificationItem>
          <SpecificationItem>
            <SpecificationName>Item weight (g)</SpecificationName>
            <SpecificationValue>{product.weight}</SpecificationValue>
          </SpecificationItem>
          <SpecificationItem>
            <SpecificationName> Dimensions (cm)</SpecificationName>
            <SpecificationValue>
              {product.height} x {product.width} x {product.length}
            </SpecificationValue>
          </SpecificationItem>
          <SpecificationItem>
            <SpecificationName>Item Model number</SpecificationName>
            <SpecificationValue>{product.model_code}</SpecificationValue>
          </SpecificationItem>
          <SpecificationItem>
            <SpecificationName>Colour</SpecificationName>
            <SpecificationValue>{product.colour}</SpecificationValue>
          </SpecificationItem>
        </SpecificationsList>
      </ProductPageSpecifications>
    </DescriptionAndSpecsContainer>
  );
}
