import { useMutation, useQuery, useQueryClient } from "react-query";
import configAxios from "../configAxios/configAxios";

export function useBook() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["Books"],
    queryFn: async () => {
      const rs = await configAxios.get("/books");
      return rs?.data;
    },
  });

  const addBook = useMutation({
    mutationFn: async (book: any) => {
      return configAxios.post("/books", book);
    },
    onSuccess: async () => {
      console.log("success");
      queryClient.invalidateQueries(["Books"]);
    },
    onError: async () => {
      console.log("err add");
    },
  });

  const deleteBook = useMutation({
    mutationFn: async (id) => {
      return configAxios.delete(`/books/${id}`);
    },
    onSuccess: async () => {
      console.log(" delete success ");
      queryClient.invalidateQueries(["Books"]);
    },
    onError: async () => {
      console.log("err");
    },
  });
  const updateBook = async (id, book) => {
    console.log("book update : ", book);
    await configAxios.patch(`/books/${id}`, book);
  };
  return {
    data,
    addBook,
    deleteBook,
    updateBook,
  };
}
