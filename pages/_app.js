import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";
import { PokeProvider } from "../components/context/pokeContext";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <PokeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PokeProvider>
  );
}

export default MyApp;
