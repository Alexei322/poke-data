import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PokemonContext } from "../store/PokemonStore";
import styles from './PokemonDetail.module.css'
const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const {pokemon} = useContext(PokemonContext);
  const pokemonInfo = pokemon.pokemon.find(
    (item) => item.id === parseInt(pokemonId)
  );
  console.log(pokemonInfo);
  return (
    <div className={styles.details}>
      <img src={pokemonInfo.sprites.front_default}></img>
      <p>{pokemonInfo.name}</p>
      <ul>
        {}
      </ul>
    </div>
  );
};

export default PokemonDetail;
