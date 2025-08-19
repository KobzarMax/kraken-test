import type { AppProps } from "next/app";
import "../styles/globals.css";
import { BasketProvider } from "../context/BasketContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasketProvider>
      <Component {...pageProps} />
    </BasketProvider>
  );
}

export default MyApp;
