const { downloadFile } = require('../utils/net-utils')
const https = require('https')
const http = require('http')

jest.mock('http')
jest.mock('https')

const response = { response: 'data' }
test('call [https.get] function when passed url with https', () => {
  https.get.mockReturnValue(response)
  downloadFile('https', 'file.jpg')
  expect(https.get).toBeCalledWith('https', expect.any(Function))
  expect(http.get).not.toBeCalled()
  expect(https.get).toReturnWith(response)
})

test('call [https.get] function when passed url without https', () => {
  http.get.mockReturnValue(response)
  downloadFile('http', 'file.jpg')
  expect(http.get).toBeCalledWith('http', expect.any(Function))
  expect(https.get).not.toBeCalled()
  expect(http.get).toReturnWith(response)
})