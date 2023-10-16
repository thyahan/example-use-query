import { useQueryData } from "@/hooks/useQueryData";

type Item = {
  name: string;
};

type SearchResponse = {
  results: Item[];
};

export default function List() {
  const searchResponse = useQueryData<SearchResponse>(["search"]);
  const pokemonList = searchResponse?.results || [];

  if (pokemonList.length === 0) return <p>no data</p>;

  return (
    <ul className="p-4">
      {pokemonList.map((pokemon, index) => (
        <li key={pokemon.name}>
          #{index + 1} {pokemon.name}
        </li>
      ))}
    </ul>
  );
}
