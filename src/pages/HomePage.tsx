import { Link } from "react-router-dom";
import { Counter } from "../Counter";

function HomePage() {
  return (
    <div className="flex flex-col space-y-5">
      <h1>Home page</h1>
      <Counter />
      <Counter />
      <Link className="text-red-300" to="/secret">Navigate to secret</Link>
      <Link className="text-yellow-300" to="/pokemons">Navigate to pokemons</Link>

    </div>
  );
}

export { HomePage }
