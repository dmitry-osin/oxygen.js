const https = require('https')
const http = require('http')
const util = require('util')
const fs = require('fs')

/**
 * @param url
 * @param path
 */
function downloadFile (url, path) {
  /**
   * @type {Promise<{}>}
   */
  let getP
  if (url.startsWith('https')) {
    getP = https.get
  } else {
    getP = http.get
  }
  const file = fs.createWriteStream(path)
  getP(url, function (response) {
    response.pipe(file)
  })
}

module.exports = {
  downloadFile
}
