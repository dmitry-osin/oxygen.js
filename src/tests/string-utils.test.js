const { throwIfNullOrWhiteSpace } = require('../utils/string-utils')

test('throw an error when whitespace is passed', () => {
  const whitespace = ' '
  expect(() => throwIfNullOrWhiteSpace(whitespace))
  .toThrowError(new Error('parameter cannot be null, empty or whitespace'))
})

test('throw an error when null is passed', () => {
  expect(() => throwIfNullOrWhiteSpace(null))
  .toThrowError(new Error('parameter cannot be null, empty or whitespace'))
})

test('throw an error when null is passed', () => {
  expect(() => throwIfNullOrWhiteSpace(undefined))
  .toThrowError(new Error('parameter cannot be null, empty or whitespace'))
})

test('throw an error when null is passed', () => {
  const empty = ''
  expect(() => throwIfNullOrWhiteSpace(empty))
  .toThrowError(new Error('parameter cannot be null, empty or whitespace'))
})