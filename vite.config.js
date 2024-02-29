import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: "8080",
  },
  plugins: [react(),     WindiCSS()],
  base: "",
});
