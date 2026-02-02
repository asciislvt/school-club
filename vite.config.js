import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "pages/contact.html"),
        events: resolve(__dirname, "pages/events.html"),
        join: resolve(__dirname, "pages/join.html"),
      },
    },
  },
});
