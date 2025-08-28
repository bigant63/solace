import { useQuery } from "@tanstack/react-query";
import { Advocate } from "@/types";

export const useAdvocates = (searchTerm?: string) => {
  const {
    data: advocates = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["advocates", searchTerm],
    queryFn: async () => {
      const url = searchTerm
        ? `/api/advocates?searchTerm=${encodeURIComponent(searchTerm)}`
        : "/api/advocates";
      const response = await fetch(url);
      const jsonResponse = await response.json();
      return jsonResponse.data;
    },
  });

  return {
    advocates,
    isLoading,
    error,
  };
};
