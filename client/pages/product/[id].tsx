import { GetServerSideProps } from "next";
import { GET_PRODUCT_BY_ID } from "../../lib/products";
import { ProductType } from "../../types";
import { Fragment, useState } from "react";
import client from "../../lib/apollo";

// Import the new components
import Header from "../../components/Header";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductDescriptionAndSpecs from "../../components/ProductDescriptionAndSpecs/ProductDescriptionAndSpecs";
import { useBasket } from "../../context/BasketContext";
import Footer from "../../components/Footer";

type ProductPageProps = {
  product: ProductType;
};

export default function ProductPage({ product }: ProductPageProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const { totalItems, addToBasket } = useBasket();

  const handleAddToCart = () => {
    addToBasket(product, quantity);
  };
  return (
    <Fragment>
      <Header basketQuantity={totalItems} />
      <div className="product-page container">
        <section className="product-page__main">
          <ProductDetails
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
            handleAddToCart={handleAddToCart}
          />
          <ProductDescriptionAndSpecs product={product} />
        </section>
      </div>
      <Footer />
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (
  context
) => {
  const { id } = context.params as { id: string };
  const { data } = await client.query({
    query: GET_PRODUCT_BY_ID,
    variables: { id: parseInt(id, 10) },
  });

  return {
    props: {
      product: data.Product ?? null,
    },
  };
};
