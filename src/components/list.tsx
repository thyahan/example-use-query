import { queryClient } from "@/query";
import { useEffect, useState } from "react";
import { QueryObserver } from "react-query";

type Item = {
  name: string;
};

type SearchResponse = {
  results: Item[];
};

const usePokemonList = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const observer = new QueryObserver<null, null, SearchResponse>(queryClient, { queryKey: "search" });

    const unsubscribe = observer.subscribe(({ data }) => {
      setData(data?.results ?? []);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return data;
};

export default function List() {
  const pokemonInfo = usePokemonList();

  if (!pokemonInfo) return <p>no data</p>;

  return (
    <ul className="p-4">
      {pokemonInfo.map((pokemon, index) => (
        <li key={pokemon.name}>
          #{index + 1} {pokemon.name}
        </li>
      ))}
    </ul>
  );
}
