import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        entryFileNames: `[name]-chat-fe.js`,
        chunkFileNames: `[name]-chat-fe.js`,
        assetFileNames: `[name]-chat-fe.[ext]`,
        format: "system",
      },
      external: [
        "@mui/material",
        "react",
        "react-dom",
      ],
    },
  },
});
