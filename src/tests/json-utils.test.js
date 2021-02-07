const {readJobManifestAsJson} = require('../utils/json-utils')
const stringUtils = require('../utils/string-utils')
const ioUtils = require('../utils/io-utils')

const expected = {
  "obj": {
    "login": "user",
    "password": "password"
  }
}

jest.mock('../utils/string-utils')

test('return object when json is passed', () => {
  const readAllLinesSpy = jest.spyOn(ioUtils, 'readAllLines')
  const path = `${__dirname}/sample.json`
  const actual = readJobManifestAsJson(path)
  expect(actual).toMatchObject(expected)
  expect(stringUtils.throwIfNullOrWhiteSpace).toBeCalledWith(path)
  expect(readAllLinesSpy).toBeCalledWith(path)
  readAllLinesSpy.mockRestore()
})