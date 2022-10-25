import { Fragment, useContext } from "react";
import { PokemonContext } from "../store/PokemonStore";
import Grid from "../UI/Grid";
import Heading from "./Heading";

const PokemonGrid = () => {
  const pokeCtx = useContext(PokemonContext);
  const displayMessage = pokeCtx.errorPresent
    ? "Fetch Failed :("
    : pokeCtx.isLoading
    ? "Loading..."
    : `${150} Pokemon Found!`;

  return (
    <Fragment>
      <Heading title={displayMessage} />
      <Grid />
    </Fragment>
  );
};

export default PokemonGrid;
