import { useContext } from "react";
import { PokemonContext } from "../store/PokemonStore";
import Heading from "./Heading";

const PokemonGrid = () => {
  const pokeCtx = useContext(PokemonContext);
  const displayMessage = pokeCtx.errorPresent
    ? "Fetch Failed :("
    : pokeCtx.isLoading
    ? "Loading..."
    : `${pokeCtx.pokemon.count} Pokemon Found!`;
  return (
    <div className="">
      <Heading title={displayMessage} />
      {console.log(pokeCtx.pokemon)}
    </div>
  );
};

export default PokemonGrid;
