import Link from "next/link";
import { ProductType } from "../../types";
import { priceFormatter } from "../../utils";
import {
  ProductContainer,
  ProductDescription,
  ProductImage,
  ProductLink,
  ProductName,
  ProductPrice,
} from "./styled";

export default function HomeProduct({ data }: { data: Partial<ProductType> }) {
  return (
    <ProductContainer>
      <ProductImage src={data.img_url} alt={data.name} />
      <ProductName>
        {data.name} - {data.power}
      </ProductName>
      <p>
        {data.brand} - {data.model_code}
      </p>
      <ProductDescription>{data.description}</ProductDescription>
      <ProductPrice>{priceFormatter.format(data.price)}</ProductPrice>
      <Link href={`/product/${data.id}`} passHref>
        <ProductLink />
      </Link>
    </ProductContainer>
  );
}
