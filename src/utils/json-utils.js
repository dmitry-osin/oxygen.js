const ioUtils = require('./io-utils')
const { throwIfNullOrWhiteSpace } = require('./string-utils')

/**
 * @param path {string}
 * @return {any}
 */
function readJobManifestAsJson (path) {
  throwIfNullOrWhiteSpace(path)
  const json = ioUtils.readAllLines(path)
  return JSON.parse(json)
}

module.exports = {
  readJobManifestAsJson
}