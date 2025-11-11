import { notFound } from 'next/navigation';
import { HogeButton } from '@/components/HogeButton';
import { RouterButton } from '@/components/RouterButton';

type Params = {
  pokemon: string;
};

type Pokemon = {
  id: number;
  name: string;
};

type Props = {
  params: Params;
};

type PokemonsResponse = Pokemon;

const getPageData = async ({ params: { pokemon } }: Props) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
    next: {
      revalidate: 100,
    },
  });
  const json = (await result.json()) as PokemonsResponse;
  return {
    pokemon: json ?? null,
  };
};

const PokemonDetailPage = async (props: Props) => {
  const { pokemon } = await getPageData(props);

  if (!pokemon) {
    notFound();
  }

  return (
    <div>
      <h1>Pokemon Detail from 「{props.params.pokemon}」</h1>
      <dl>
        <dt>{pokemon.id}</dt>
        <dd>{pokemon.name}</dd>
      </dl>
      <HogeButton />
      <RouterButton />
    </div>
  );
};

export default PokemonDetailPage;

export const revalidate = 1800;
