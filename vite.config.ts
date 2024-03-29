import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  base: "/minimind",
  // TODO 打包体验页面和三方库存在冲突，待优化
  // build: {
  //   lib: {
  //     entry: "./src/index.ts",
  //     name: "minimind",
  //     // formats: ['es'],
  //     fileName: (format) => `minimind.${format}.js`,
  //   },
  //   rollupOptions: {
  //     // 确保外部化处理那些你不想打包进库的依赖
  //     external: ["react"],
  //     output: {
  //       // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
  //       globals: {
  //         react: "React",
  //       },
  //     },
  //   },
  //   outDir: "lib/dist",
  // },
});
