const fs = require('fs')
const fsAsync = require('fs/promises')
const { throwIfNullOrWhiteSpace } = require('./string-utils')

/**
 * @param path
 * @return {string[]}
 */
function readFiles (path) {
  throwIfNullOrWhiteSpace(path)
  return fs.readdirSync(path)
}

/**
 * @param path {string}
 * @return {Promise<string[]>}
 */
async function readFilesAsync (path) {
  throwIfNullOrWhiteSpace(path)
  return await fsAsync.readdir(path)
}

/**
 * @param path {string}
 * @return {Promise<string>}
 */
async function readAllLinesAsync (path) {
  throwIfNullOrWhiteSpace(path)
  const buffer = await fsAsync.readFile(path)
  return buffer.toString()
}

/**
 * @param path {string}
 * @return {string}
 */
function readAllLines(path) {
  throwIfNullOrWhiteSpace(path)
  return fs.readFileSync(path).toString()
}

module.exports = {
  readFiles, readFilesAsync, readAllLines, readAllLinesAsync
}