const path = require("path");

const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["env", "react"]
      }
    }
  }
];

module.exports = {
  entry: {
    main: "./src/js/index.js"
  },
  mode: "development",
  module: {
    rules
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./client")
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./client")
  },
  resolve: { extensions: [".js", ".jsx"] }
};
