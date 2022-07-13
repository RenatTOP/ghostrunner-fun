import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    rules: [
        {
            test: /\.pug$/,
            loader: "vue-pug-loader",
        },
    ],
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/sass/_variables.sass";`,
            },
        },
    },
});
