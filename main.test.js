//npm test

const library = require('./library')
const mix = require('./main')

//create test case
let n = 7
// ^^^^^change test case numbers
let testCase = library.testCase(n)
let copyByValue = JSON.parse(JSON.stringify(testCase))

for (let i = 0; i < n; i++) {
  if (copyByValue[i][0] == "+") {

    copyByValue[i].splice(0, 1)
    testCase[i].push(library.sum(...copyByValue[i]))

  } else if (copyByValue[i][0] == "*") {

    copyByValue[i].splice(0, 1)
    testCase[i].push(library.multiple(...copyByValue[i]))

  }
}

//testCase [["+", ..., result], ...]

describe("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", () => {
  test.each(
    testCase
  )(`test case index: %#`, (...arr) => {
    let expected = arr.pop()
    expect(mix(...arr)).toEqual(expected)
  })
})
