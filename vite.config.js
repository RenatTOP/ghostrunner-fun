import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({ template: { transformAssetUrls } }),
        quasar({
            sassVariables: "src/assets/sass/_variables.sass",
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    rules: [
        {
            test: /\.pug$/,
            loader: "vue-pug-loader",
        },
    ],
    css: {
        preprocessorOptions: {
            sass: {
                additionalData: `
                @import "@/assets/sass/_variables.sass"
                @import "@/assets/sass/_main.sass"\n`,
            },
        },
    },
});
