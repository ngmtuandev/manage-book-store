import { create } from "zustand";

const useTagStore = create((set) => ({
  tags: null,
  setTags: (tags) => {
    set({ tags: tags });
  },
}));

export default useTagStore;
