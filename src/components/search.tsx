import { useSearch } from "@/hooks/useSearch";

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
