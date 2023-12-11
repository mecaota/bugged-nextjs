import { useRouter } from 'next/navigation';
import type { FC } from 'react';

export const RouterButton: FC = () => {
  const router = useRouter();
  return <button onClick={() => router.push('/pokemons')}>HOGE</button>;
};
