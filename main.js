const library = require('./library')

function mix(sign, ...args) {
  if (sign === "+") {
    return library.sum(...args)
  } else if (sign === "*") {
    return library.multiple(...args)
  } else {
    console.log(`unacceptable token`)
  }
}

module.exports = mix
