const { extract } = require('../utils/archive-utils')
const { throwIfNullOrWhiteSpace } = require('../utils/string-utils')
const { promisify } = require('util')

jest.mock('../utils/string-utils')
jest.mock('util')

const inputFile = 'sample.zip'

test('extract archive if path and output provided', () => {
  const promisifyMock = jest.fn(async (input, path) => {
    return Promise.resolve()
  })
  promisify.mockReturnValue(promisifyMock)

  extract(inputFile, '.')

  expect(throwIfNullOrWhiteSpace).toBeCalledWith(inputFile)
  expect(throwIfNullOrWhiteSpace).toBeCalledWith('.')
  expect(promisify).toBeCalledWith(expect.anything())
  expect(promisifyMock).toBeCalledWith(inputFile, '.')
})