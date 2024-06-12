import { defineConfig } from "vite";
import { fileURLToPath } from 'url';
import react from "@vitejs/plugin-react";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
        "@": path.resolve(__dirname, "./src"),
        }
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/components/index.jsx"),
            name: "NaviUI",
            fileName: (format) => `navi-ui.${format}.js`,
            formats: ["es", "umd"],
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
    assetsInclude: ["**/*.svg+xml"],
})
