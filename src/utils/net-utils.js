const {IncomingMessage} = require('http')
const util = require('util')
const {throwIfNullOrWhiteSpace} = require('../utils/string-utils')
const fs = require('fs')

/**
 * @param url {string}
 * @param path {string}
 */
function downloadFile(url, path) {
  throwIfNullOrWhiteSpace(url)
  throwIfNullOrWhiteSpace(path)
  const file = fs.createWriteStream(path)
  /**
   * @type {function(*): *}
   * @param response {IncomingMessage}
   */
  const cb = function (response) {
    console.log(response)
    response.pipe(file)
  }
  if (url.startsWith('https')) {
    const {get} = require('https')
    get(url, cb)
  } else {
    const {get} = require('http')
    get(url, cb)
  }
}

module.exports = {
  downloadFile
}
