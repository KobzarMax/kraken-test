import { GetServerSideProps } from "next";
import { getProductById } from "../../lib/products";
import { ProductType } from "../../types";
import { Fragment, useState } from "react";
import Link from "next/link";
import { priceFormatter } from "../../utils";

type ProductPageProps = {
  product: ProductType;
};

export default function ProductPage({ product }: ProductPageProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const [basketQuantity, setBasketQuantity] = useState<number | null>(null);

  const handleAddToCart = () => {
    setBasketQuantity((prevState) => prevState + quantity);
  };

  return (
    <Fragment>
      <header className="header">
        <Link href={"/"}>
          <a href="/">
            <img
              width={160}
              src={"/octopus-logo.svg"}
              alt="octopus logo"
              className="header-logo"
            />
          </a>
        </Link>
        <button className="header-button">
          <img src={"/basket.svg"} alt="basket" className="header-basket" />
          {!!basketQuantity && (
            <span className="basket-quantity" title="Basket items">
              {basketQuantity}
            </span>
          )}
        </button>
      </header>
      <div className="product-page">
        <section className="product-page__main">
          <div className="product-page__image-container">
            <img
              className="product-page__image"
              src={product.img_url}
              alt={`Product image of ${product.name}`}
            />
          </div>
          <div className="product-page__info-wrapper">
            <div className="product-page__info">
              <h1 className="product-page__name">{product.name}</h1>
              <p className="product-page__power">
                {product.power} // Packet of {product.quantity}
              </p>
              <div className="product-page__price-container">
                <p className="product-page__price">
                  {priceFormatter.format(product.price)}
                </p>
                <div className="product-page__quantity-wrapper">
                  <span>Qty</span>
                  <div className="product-page__quantity">
                    <button
                      aria-label="Decrease quantity"
                      onClick={() =>
                        setQuantity((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={quantity <= 1}
                      className="product-page__quantity-button reduce"
                    >
                      -
                    </button>
                    <p
                      title="Current quantity"
                      className="product-page__quantity-value"
                    >
                      {quantity}
                    </p>
                    <button
                      onClick={() => setQuantity((prevState) => prevState + 1)}
                      className="product-page__quantity-button add"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="product-page__add-to-cart-button"
              >
                Add to cart
              </button>
            </div>
            <div>
              <div className="product-page__description">
                <h2 className="product-page__description-title">Description</h2>
                <p className="product-page__description-text">
                  {product.description}
                </p>
              </div>
              <div className="product-page__specifications">
                <h2 className="product-page__specifications-title">
                  Specifications
                </h2>
                <div className="product-page__specifications-list">
                  <div className="product-page__specification">
                    <p className="product-page__specification-name">Brand</p>
                    <p className="product-page__specification-value">
                      {product.brand}
                    </p>
                  </div>
                  <div className="product-page__specification">
                    <p className="product-page__specification-name">
                      Item weight (g)
                    </p>
                    <p className="product-page__specification-value">
                      {product.weight}
                    </p>
                  </div>
                  <div className="product-page__specification">
                    <p className="product-page__specification-name">
                      Dimensions (cm)
                    </p>
                    <p className="product-page__specification-value">
                      {product.height} x {product.width} x {product.length}
                    </p>
                  </div>
                  <div className="product-page__specification">
                    <p className="product-page__specification-name">
                      Item Model number
                    </p>
                    <p className="product-page__specification-value">
                      {product.model_code}
                    </p>
                  </div>
                  <div className="product-page__specification">
                    <p className="product-page__specification-name">Colour</p>
                    <p className="product-page__specification-value">
                      {product.colour}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  const product = await getProductById(parseInt(id, 10));

  return {
    props: {
      product,
    },
  };
};
