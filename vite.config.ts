import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    async configureServer(server) {
      // Try to dynamically import the dev express server if it exists.
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const mod = await import(path.resolve(process.cwd(), 'server'));
        if (mod && typeof mod.createServer === 'function') {
          const app = mod.createServer();
          server.middlewares.use(app);
        }
      } catch (err) {
        // If server code is removed (we're migrating to serverless), skip adding middleware.
        // Silent ignore to keep dev server working.
      }
    },
  };
}
