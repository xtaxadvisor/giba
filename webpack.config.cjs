import path from "path";
import webpack from "webpack";
export default {
  mode: "development", // Use "development" mode for devServer and other settings
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
  entry: "./src/index.js", // ✅ Ensure this file exists!
  output: {
    filename: "bundle.js",
    path: path.resolve(path.dirname(new URL(import.meta.url).pathname), "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: "./dist",
    hot: true,
  },
};