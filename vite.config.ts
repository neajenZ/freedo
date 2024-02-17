import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/freedo",
  plugins: [react()],
  preview: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
