import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokémon Catcher</title>
        <meta
          name="Pokemon Catcher"
          content="Web app for new Pokemon Trainers, allowing them to catch their first pokemons.."
        />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="background">
        <header></header>
        <main>
          <Container className="d-flex flex-column justify-content-center align-items-center main">
            {children}
          </Container>
        </main>
        <footer></footer>
      </div>
    </>
  );
};
