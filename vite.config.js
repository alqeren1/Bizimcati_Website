import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    "**/*.jpg",
    "**/*.JPG",
    "**/*.jpeg",
    "**/*.JPEG",
    "**/*.png",
    "**/*.PNG",
    "**/*.mp4",
    "**/*.MP4",
    "**/*.webm",
    "**/*.ogg",
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
