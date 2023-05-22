import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        format: "system",
        sourcemap: true,
      },
      external: [
        "@emotion/react",
        "@emotion/styled",
        "@mui/material",
        "react",
        "react-dom",
        "styled-components",
      ],
    },
  },
});
