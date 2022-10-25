export const fetchPokemonInfo = async (pokemon) => {
  const url = pokemon.url;
  try {
    const response = await fetch(url);
    const responseObject = await response.json();
    return responseObject;
  } catch (error) {
    console.log(error.message);
  }
};

export const sortPokemon = (pokeArray, ascending = true) => {
  if (ascending) {
    pokeArray.sort((a, b) => a.order - b.order);
  }
};

