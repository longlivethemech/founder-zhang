import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// On `vite build` (CI → GitHub Pages project site) assets must be served from
// the repo subpath; local `vite dev` stays at "/" so the existing preview /
// launch.json workflow is untouched. Chapters reference images via
// `import.meta.env.BASE_URL`, so they follow this base automatically.
export default defineConfig(({ command }) => ({
  // GitHub Pages 项目站点：构建时资源走仓库子路径，本地 dev 仍用根路径。
  base: command === "build" ? "/founder-zhang/" : "/",
  plugins: [react()],
  server: {
    port: 5188,
    strictPort: true,
    fs: { allow: [".."] },
  },
}));
