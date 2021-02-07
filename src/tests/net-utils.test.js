const { downloadFile } = require('../utils/net-utils')
const https = require('https')
const http = require('http')
const fs = require('fs')

jest.mock('http')
jest.mock('https')
jest.mock('fs')

const response = { response: 'data' }
const path = 'file.jpg'
test('call [https.get] function when passed url with https', () => {
  https.get.mockReturnValue(response)
  fs.createWriteStream.mockReturnValue(path)
  downloadFile('https', path)
  expect(https.get).toBeCalledWith('https', expect.any(Function))
  expect(fs.createWriteStream).toBeCalledWith(path)
  expect(http.get).not.toBeCalled()
  expect(https.get).toReturnWith(response)
  jest.clearAllMocks();
})

test('call [https.get] function when passed url without https', () => {
  http.get.mockReturnValue(response)
  fs.createWriteStream.mockReturnValue(path)
  downloadFile('http', path)
  expect(http.get).toBeCalledWith('http', expect.any(Function))
  expect(fs.createWriteStream).toBeCalledWith(path)
  expect(https.get).not.toBeCalled()
  expect(http.get).toReturnWith(response)
  jest.clearAllMocks();
})