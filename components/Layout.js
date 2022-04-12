import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokemon Catcher</title>
        <meta
          name="Pokemon Catcher"
          content="Web app for new Pokemon Trainers, allowing them to catch their first pokemons.."
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="background">
        <header></header>
        <main>
          <Container className="d-flex justify-content-center align-items-center main">
            {children}
          </Container>
        </main>
        <footer></footer>
      </div>
    </>
  );
};
