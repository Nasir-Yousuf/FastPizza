import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/

import eslintPlugin from "@nabla/vite-plugin-eslint";

export default defineConfig({
  plugins: [eslintPlugin(), tailwindcss(), react()],
});
