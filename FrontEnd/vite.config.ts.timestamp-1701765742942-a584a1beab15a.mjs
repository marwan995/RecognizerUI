// vite.config.ts
import path from "path";
import react from "file:///D:/Quitter/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///D:/Quitter/node_modules/vite/dist/node/index.js";
import EnvironmentPlugin from "file:///D:/Quitter/node_modules/vite-plugin-environment/dist/index.js";
import reactRefresh from "file:///D:/Quitter/node_modules/@vitejs/plugin-react-refresh/index.js";
var __vite_injected_original_dirname = "D:\\Quitter";
var vite_config_default = defineConfig({
  plugins: [react(), EnvironmentPlugin("all"), reactRefresh()],
  define: {
    global: "window"
  },
  server: {
    host: "0.0.0.0",
    port: 3e3
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxRdWl0dGVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxRdWl0dGVyXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9RdWl0dGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgRW52aXJvbm1lbnRQbHVnaW4gZnJvbSBcInZpdGUtcGx1Z2luLWVudmlyb25tZW50XCI7XHJcbmltcG9ydCByZWFjdFJlZnJlc2ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QtcmVmcmVzaCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCksIEVudmlyb25tZW50UGx1Z2luKFwiYWxsXCIpLCByZWFjdFJlZnJlc2goKV0sXHJcbiAgZGVmaW5lOiB7XHJcbiAgICBnbG9iYWw6ICd3aW5kb3cnLFxyXG4gICAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6ICcwLjAuMC4wJyxcclxuICAgIHBvcnQ6IDMwMDAsXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb04sT0FBTyxVQUFVO0FBQ3JPLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLHVCQUF1QjtBQUM5QixPQUFPLGtCQUFrQjtBQUp6QixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLGtCQUFrQixLQUFLLEdBQUcsYUFBYSxDQUFDO0FBQUEsRUFDM0QsUUFBUTtBQUFBLElBQ04sUUFBUTtBQUFBLEVBQ1I7QUFBQSxFQUNGLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
