/**
 * @param source {string}
 * @return {boolean}
 */
function isNullOrWhiteSpace (source) {
  return !source || source.length === 0 || isBlank(source)
}

/**
 * @param source {string}
 * @return {boolean}
 */
function isEmpty(source) {
  return (!source || 0 === source.length);
}

/**
 * @param source {string}
 * @return {boolean}
 */
function isBlank(source) {
  return (!source || /^\s*$/.test(source));
}

/**
 * @throws error {Error} - if param is null, empty or whitespace
 * @param source {string}
 */
function throwIfNullOrWhiteSpace (source) {
  if (isNullOrWhiteSpace(source)) {
    throw new Error('parameter cannot be null, empty or whitespace')
  }
}

module.exports = {
  isNullOrWhiteSpace, throwIfNullOrWhiteSpace, isBlank, isEmpty
}