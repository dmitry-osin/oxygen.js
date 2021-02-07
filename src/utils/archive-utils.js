const { promisify } = require('util')
const decompress = require('decompress')
const { throwIfNullOrWhiteSpace } = require('./string-utils')

/**
 * @param inputFile {string}
 * @param outputPath {string}
 * @return {Promise<void>}
 */
async function extract (inputFile, outputPath) {
  throwIfNullOrWhiteSpace(inputFile)
  throwIfNullOrWhiteSpace(outputPath)
  const decompressAsync = promisify(decompress)
  await decompressAsync(inputFile, outputPath)
}

module.exports = {
  extract
}