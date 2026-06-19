import { defineConfig } from "@rspack/cli";
import path from "path";

export default defineConfig([
  {
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.mjs",
      library: { type: "module" },
      clean: true,
    },
    experiments: { outputModule: true },
    resolve: { extensions: [".ts", ".tsx", ".js"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "builtin:swc-loader",
          exclude: /node_modules/,
        },
      ],
    },
  },
  {
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      library: { type: "commonjs2" },
    },
    resolve: { extensions: [".ts", ".tsx", ".js"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "builtin:swc-loader",
          exclude: /node_modules/,
        },
      ],
    },
  },
]);