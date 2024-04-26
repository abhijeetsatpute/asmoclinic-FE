// Create a file for your store, e.g., authStore.js
import { create } from "zustand";

// Define your store
const useResultStore = create((set) => ({
  before: null, // Initial state
  after: null, // Initial state
  setBeforeImage: (img: any) => {
    set((state: any) => ({ before: img }));
  },
  setAfterimage: (img: any) => {
    set((state: any) => ({ after: img }));
  },
}));

export default useResultStore;
