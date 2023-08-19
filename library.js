let library = {
  sum(...args) {
    let output = 0
    for (let arg of args) {
      output += parseInt(arg)
    }
    return output
  },

  multiple(...args) {
    let output = 1
    for (let arg of args) {
      output = output * parseInt(arg)
    }
    // output = output * parseInt(a) * parseInt(b)
    return output
  },

  testCase(n = 3) { // output == [sign,...args], sign == "+" || "*", args個數2~10不等，值0~9

    let output = []

    //產生n個case
    for (let i = 0; i < n; i++) {

      //產生1個case

      let firstId = []
      if (this.getInt() > 4) {
        firstId.push("+")
      } else {
        firstId.push("*")
      }

      let m = this.getInt(2, 10)
      for (let i = 0; i < m; i++) {
        firstId.push(this.getInt())
      }

      output.push(firstId)
    }
    return output
  },


  getInt(a = 0, b = 9) {

    let output = a + Math.ceil((b - a) * Math.random())
    return output

  },

}

module.exports = library

//>>>>>>>>>> testing area below <<<<<<<<<<
