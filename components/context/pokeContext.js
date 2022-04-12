import { createContext, useContext, useEffect, useState } from "react";

const PokeContext = createContext(undefined);

export function usePoke() {
  return useContext(PokeContext);
}

export function PokeProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let pokesDataAll = [];
    offset &&
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}`)
        .then((response) => response.json())
        .then(function (data) {
          data.results.forEach((data) => {
            fetch(data.url)
              .then((response) => response.json())
              .then((pokeData) => {
                pokesDataAll.push({
                  artwork:
                    pokeData.sprites.other["official-artwork"].front_default,
                  name: pokeData.name,
                  stats: pokeData.stats.reduce(
                    (agg, stat) => [
                      ...agg,
                      {
                        name: stat.stat.name,
                        value: stat.base_stat,
                      },
                    ],
                    []
                  ),
                });
              })
              .then(() => setData(pokesDataAll));
          });
        });
    setIsLoading(false);
  }, [offset]);

  const value = {
    isLoading,
    data,
    offset,
    setOffset,
    isLogged,
    setIsLogged,
  };
  return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>;
}
