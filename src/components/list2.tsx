import { useSearch } from "@/hooks/useSearch";

type Item = {
  name: string;
};

type SearchResponse = {
  results: Item[];
};

export default function List2() {
  const { data } = useSearch<SearchResponse>();

  const pokemonList = data?.results || [];

  if (pokemonList.length === 0) return <p>no data</p>;

  return (
    <ul className="p-4 border-t border-red-500">
      {pokemonList.map((pokemon, index) => (
        <li key={pokemon.name}>
          #{index + 1} {pokemon.name}
        </li>
      ))}
    </ul>
  );
}
