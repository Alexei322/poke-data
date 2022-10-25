import { Fragment, useContext } from "react";
import { PokemonContext } from "../store/PokemonStore";
import Card from "../UI/Card";
import Heading from "./Heading";

const PokemonGrid = () => {
  const pokeCtx = useContext(PokemonContext);
  let content;
  const displayMessage = pokeCtx.errorPresent
    ? "Fetch Failed :("
    : pokeCtx.isLoading
    ? "Loading..."
    : `${150} Pokemon Found!`;

  if (pokeCtx.errorPresent || pokeCtx.isLoading) {
    content = "LOADING";
  } else {
    content = <Card />;
  }

  // console.log(pokeCtx.pokemon);

  return (
    <Fragment>
      <Heading title={displayMessage} />
      {content}
    </Fragment>
  );
};

export default PokemonGrid;
