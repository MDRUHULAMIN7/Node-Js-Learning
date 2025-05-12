function add(a, b) {
    return a + b;
  }

  function sub(a,b){
    return a - b;
    // console.log(first)
  }

  exports.multiply = (a, b) => a * b;
  exports.divide = (a, b) => a / b;

  module.exports ={ add , sub };