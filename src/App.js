import Header from "./components/Header";
import PokemonGrid from "./components/PokemonGrid";
import { PokemonContextProvider } from "./store/PokemonStore";

function App() {
  return (
    <PokemonContextProvider>
      <Header heading={"PokeData!"} />
      <PokemonGrid/>
    </PokemonContextProvider>
  );
}

export default App;
