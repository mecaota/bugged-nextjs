import Link from 'next/link';
import { notFound } from 'next/navigation';

type Pokemon = {
  name: string;
  url: string;
};

type PokemonsResponse = {
  results: Pokemon[];
};

const getPageData = async () => {
  const result = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20', {
    next: {
      revalidate: 100,
    },
  });
  const json = (await result.json()) as PokemonsResponse;
  return {
    pokemons: json.results ?? [],
  };
};

const PokemonListPage = async () => {
  const { pokemons } = await getPageData();

  if (!pokemons?.length) {
    notFound();
  }

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <Link href={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonListPage;

export const revalidate = 1800;
