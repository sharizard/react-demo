export type PokemonListResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonList[];
  };
  
  export type PokemonList = {
    name: string;
    url: string;
  };
  
  export type Pokemon = {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  };
  