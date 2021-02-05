const fs = require('fs')
const fsAsync = require('fs/promises')

/**
 * @param path
 * @return {string[]}
 */
function readFiles (path) {
  return fs.readdirSync(path)
}

/**
 * @param path
 * @return {Promise<string[]>}
 */
async function readFilesAsync (path) {
  return fsAsync.readdir(path)
}

module.exports = {
  readFiles, readFilesAsync
}