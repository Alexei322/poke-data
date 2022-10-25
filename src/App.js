import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import PokemonPage from "./routes/PokemonPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/:pokemonId',
    element: <PokemonPage/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
