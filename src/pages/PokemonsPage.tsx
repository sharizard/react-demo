import { usePokemons } from "../hook/usePokemons";

function PokemonsPage() {
  const pokemons = usePokemons()
  return (
    <div className="flex flex-col space-y-5">
      {pokemons.map((pokemon: any, index: any) => (
        <div key={index}>
            {pokemon.name}
        </div>
      ))}
    </div>
  );
}

export { PokemonsPage };
