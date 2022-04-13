import React from "react";
import Login from "../components/Login";
import { usePoke } from "../components/context/pokeContext";
import MainPage from "../components/MainPage";

export default function Home() {
  const { isLogged } = usePoke();

  if (!isLogged) return <Login />;

  return <MainPage />;
}
