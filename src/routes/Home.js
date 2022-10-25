import Header from "../components/Header";
import PokemonGrid from "../components/PokemonGrid";
import { Fragment } from "react";
const Home = () => {
  return (
    <Fragment>
      <Header heading={"PokeData!"} />
      <PokemonGrid />
    </Fragment>
  );
};

export default Home;
