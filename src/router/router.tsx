import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PokemonsPage } from "../pages/PokemonsPage";
import { SecretPage } from "../pages/SecretPaget";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/secret",
    element: <SecretPage />,
  },
  {
    path: "/pokemons",
    element: <PokemonsPage />,
  },
]);

export { router };
