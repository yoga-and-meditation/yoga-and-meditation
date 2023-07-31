import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";

//Configuration for Vite
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    //Use the Vite plugin for react with SWC (Speedy Web Compiler)
    react(),

    //Use the Rollup plugin to handle dynamic imports with variables
    dynamicImportVars({
      // options
    }),
  ],

  server: {
    port: 3000,
  },
});
