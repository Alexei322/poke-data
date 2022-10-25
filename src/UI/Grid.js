import { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "../store/PokemonStore";
import styles from "./Grid.module.css";
const Grid = () => {
  const pokeCtx = useContext(PokemonContext);

  return (
    <ul className={styles.grid}>
      {pokeCtx.pokemon.pokemon.map((pokemon) => (
        <Link to={`/${pokemon.id}`} key={pokemon.name}>
          <img
            src={pokemon.sprites.front_default}
            width="96px"
            height="96px"
            alt={pokemon.name}
          ></img>
          {pokemon.name}
        </Link>
      ))}
    </ul>
  );
};

export default Grid;
