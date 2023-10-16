/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export function useSearch<T>() {
  const [pagination, setPagination] = useState({ offset: 0, page: 1 });
  const { data, isLoading, refetch } = useQuery<undefined, undefined, T>(
    ["search"],
    async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pagination.offset}`);
      return await res.json();
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    refetch();
  }, [pagination.page]);

  return { data, isLoading, pagination, setPagination };
}
