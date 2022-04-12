import { createContext, useContext } from "react";

const PokeContext = createContext(undefined);

export function usePoke() {
  return useContext(PokeContext);
}

export function PokeProvider({ children }) {
  const value = {};
  return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>;
}
