import Link from "next/link";
import { ProductType } from "../../types";
import { priceFormatter } from "../../utils";

export default function HomeProduct({ data }: { data: Partial<ProductType> }) {
  return (
    <article className="product">
      <img src={data.img_url} alt={data.name} />
      <h2 className="product-name">
        {data.name} - {data.power}
      </h2>
      <p>
        {data.brand} - {data.model_code}
      </p>
      <p className="product-description">{data.description}</p>
      <p className="product-price">{priceFormatter.format(data.price)}</p>
      <Link className="product-link" href={`/product/${data.id}`}>
        <a className="product-link" href={`/product/${data.id}`} />
      </Link>
    </article>
  );
}
