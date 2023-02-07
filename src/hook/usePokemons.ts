import { PokemonList } from "./../types/pokemon";
import { useEffect, useState } from "react";
import { PokemonListResponse } from "../types/pokemon";

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonList[]>([]);
  async function fetchPokemons() {
    const r = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    const pokemonList = (await r.json()) as PokemonListResponse;

    setPokemons(pokemonList.results);
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return pokemons;
};

export { usePokemons };
