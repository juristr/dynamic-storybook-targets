import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: ["@design-system/icons"],
  },
});
