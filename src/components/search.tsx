import { useEffect, useState } from "react";
import { useQuery } from "react-query";

function useSearch() {
  const [pagination, setPagination] = useState({ offset: 0, page: 1 });

  const { data, isLoading, refetch } = useQuery(["search"], () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pagination.offset}`).then(res => res.json());
  });

  useEffect(() => {
    refetch();
  }, [pagination.page]);

  console.log("search data: ", data);

  return { isLoading, pagination, setPagination };
}

export default function Search() {
  const { isLoading, pagination, setPagination } = useSearch();

  return (
    <div className="border-b border-red-500 p-4 gap-4">
      {isLoading ? <p>loading ...</p> : <p>Page {pagination.page}</p>}
      <p
        className="cursor-pointer hover:underline"
        onClick={() =>
          setPagination(prev => ({
            ...prev,
            page: prev.page + 1,
            offset: prev.offset + 20,
          }))
        }>
        Next
      </p>
    </div>
  );
}
