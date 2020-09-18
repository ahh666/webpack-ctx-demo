function importAll(contextLoader) {
  contextLoader.keys().forEach((key) => console.log(contextLoader(key)))
}

const contextLoader = require.context('./somejs', true, /\.js/)
importAll(contextLoader)
