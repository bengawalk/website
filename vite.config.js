import { resolve } from "path";
import { defineConfig } from "vite";
import { VitePluginRadar } from 'vite-plugin-radar';

export default defineConfig({
  envDir: resolve(__dirname),
  publicDir: resolve(__dirname, "public"),
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        "category": resolve(__dirname, "src/category/index.html"),
      },
    },
    outDir: resolve(__dirname, "dist"),
  },
  plugins: [
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-Q626RY3TZM',
      },
    }),
  ],
});
