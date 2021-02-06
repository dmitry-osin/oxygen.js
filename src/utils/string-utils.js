function isNullOrWhiteSpace (source) {
  return !source || source.length === 0 || isBlank(source)
}

function isEmpty(str) {
  return (!str || 0 === str.length);
}

function isBlank(source) {
  return (!source || /^\s*$/.test(source));
}

function throwIfNullOrWhiteSpace (source) {
  if (isNullOrWhiteSpace(source)) {
    throw new Error('parameter cannot be null, empty or whitespace')
  }
}

String.prototype.isEmpty = function () {
  return (this.length === 0 || !this.trim())
}

String.prototype.isNotEmpty = function () {
  return !this.isEmpty()
}

module.exports = {
  isNullOrWhiteSpace, throwIfNullOrWhiteSpace, isBlank, isEmpty
}