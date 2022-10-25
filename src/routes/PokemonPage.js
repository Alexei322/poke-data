import { Fragment } from "react";

import Header from "../components/Header";
import PokemonDetail from "../components/PokemonDetail";

const PokemonPage = () => {
  return (
    <Fragment>
      <Header heading={"PokeData!"} />
      <PokemonDetail />
    </Fragment>
  );
};

export default PokemonPage;
