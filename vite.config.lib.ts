import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/web-component.tsx"),
      name: "TokenPriceWidget",
      formats: ["es", "umd", "iife"],
      fileName: (format) => {
        if (format === "es") return "token-price-widget.mjs";
        if (format === "umd") return "token-price-widget.umd.js";
        if (format === "iife") return "token-price-widget.iife.js";
        return `token-price-widget.${format}.js`;
      },
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true, // avoid code splitting because UMD/IIFE don't support it
      },
    },
    minify: "esbuild",
    emptyOutDir: true,
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
