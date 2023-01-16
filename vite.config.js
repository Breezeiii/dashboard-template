import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pxtorem from "postcss-pxtorem";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 192, // 1rem的大小
          propList: ["*"] // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/assets/style/variable.scss';"
      }
    }
  }
});
