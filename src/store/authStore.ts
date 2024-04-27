// Create a file for your store, e.g., authStore.js
import create from "zustand";

// Define your store
const useAuthStore = create((set) => ({
  adminLogged: false, // Initial state
  setAdminLogged: (loggedIn: boolean) => set({ adminLogged: loggedIn }),
}));

export default useAuthStore;
