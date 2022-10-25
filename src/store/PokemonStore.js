import React, { createContext, useEffect, useState } from "react";
import { fetchPokemonInfo, sortPokemon } from "../lib/api";
export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
  const [pokemon, setPokemon] = useState({
    pokemon: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let returnSprites = [];
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Could not fetch Pokemon :(");
        }

        await Promise.all(
          data.results.map(async (item) => {
            let returnElement = await fetchPokemonInfo(item);
            returnSprites.push(returnElement);
          })
        );
        sortPokemon(returnSprites);
        setPokemon({ pokemon: returnSprites });
        setIsLoading(false);
        setError(false);
      } catch (error) {
        console.log(error.message);
        setError(true);
      }
    };
    getData();
  }, []);

  const contextValue = {
    pokemon: pokemon,
    isLoading: isLoading,
    errorPresent: error,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonContextProvider };
