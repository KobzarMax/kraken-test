import Link from "next/link";
import { ProductType } from "../types";
import { GetServerSideProps } from "next";
import { getAllProducts } from "../lib/products";
import HomeProduct from "../components/HomeProduct";

type HomePageProps = {
  products: Partial<ProductType>[];
};

export default function Home({ products }: HomePageProps) {
  return (
    <main>
      <div className="home">
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <h1>Welcome to the Octopus Energy Frontend code test!</h1>
        <div className="products">
          {products.map((product) => (
            <HomeProduct key={product.id} data={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
  };
};
