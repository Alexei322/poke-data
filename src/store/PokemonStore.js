import React, { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=20&limit=1200"
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Could not fetch Pokemon :(");
        }

        setPokemon(data);
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
    errorPresent: error
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonContextProvider };
