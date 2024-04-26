// Create a file for your store, e.g., authStore.js
import { create } from "zustand";

// Define your store
const useGalleryStore = create((set) => ({
  image: null, // Initial state
  setImage: (img: any) => {
    set((state: any) => ({ image: img }));
  },
}));

export default useGalleryStore;
