import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures proper routing for Vercel
  server: {
    port: 3000, // Optional: Define the port for local development
  },
  build: {
    outDir: "dist", // Ensures build output is correctly structured
  },
});
