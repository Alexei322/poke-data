import { useContext } from "react";
import { PokemonContext } from "../store/PokemonStore";
import styles from "./Card.module.css";
const Card = () => {
  const pokeCtx = useContext(PokemonContext);
  const showDetailHandler = (value) => () => {
    console.log(value);
  };
  return (
    <ul className={styles.grid}>
      {pokeCtx.pokemon.pokemon.map((pokemon) => (
        <li onClick={showDetailHandler(pokemon.name)} key={pokemon.name}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
          {pokemon.name}
        </li>
      ))}
    </ul>
  );
};

export default Card;
