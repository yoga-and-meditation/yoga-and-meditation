import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      "@assets": "/src/assets", // Adjust the path to match your project structure
      "@services": "/src/assets/images/services", // Adjust the path accordingly
      "@components": "/src/components", // Add more aliases as needed
    },
  },
});
