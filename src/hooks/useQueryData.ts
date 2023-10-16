import { queryClient } from "@/query";
import { useEffect, useState } from "react";
import { QueryObserver } from "react-query";

export function useQueryData<T = any>(key: string | string[]): T | undefined {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const observer = new QueryObserver<null, null, T>(queryClient, { queryKey: key });

    const unsubscribe = observer.subscribe(result => {
      setData(result.data);
    });

    return () => {
      unsubscribe();
    };
  }, [key]);

  return data;
}
