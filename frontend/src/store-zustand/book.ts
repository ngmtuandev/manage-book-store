import { create } from "zustand";

const useBookStore = create((set) => ({
  slectBook: null,
  setSelectBook: (book) => {
    set({ slectBook: book });
  },
}));

export default useBookStore;
