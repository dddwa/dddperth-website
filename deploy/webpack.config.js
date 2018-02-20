// WIP - trying to make it so we can webpack --progress and get the server.js fully bundled without needing node_modules
module.exports = {
  target: "node",
  entry: "./deploy/server.js",
  output: {
    filename: "server.js",
    publicPath: "/"
  },
  node: {
    "net": "empty",
    "fs": "empty",
    "fsevents": "empty",
    "module": "empty",
    "child_process": "empty",
    "readline": "empty"
  }
};
