import { ProductType } from "../types";
import { GetServerSideProps } from "next";
import { GET_ALL_PRODUCTS } from "../lib/products";
import HomeProduct from "../components/HomeProduct";
import client from "../lib/apollo";
import Footer from "../components/Footer";

type HomePageProps = {
  products: Partial<ProductType>[];
};

export default function Home({ products }: HomePageProps) {
  return (
    <main>
      <div className="container">
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
      <Footer />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({ query: GET_ALL_PRODUCTS });

  return {
    props: {
      products: data.allProducts,
    },
  };
};
