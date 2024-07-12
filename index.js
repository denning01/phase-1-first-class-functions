
function receivesAFunction(callback) {
    callback();
  }
  
  // Export the function if using modules
  module.exports = { saturdayFun, mondayWork, wrapAdjective, receivesAFunction };
  

  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function");
    };
  }
  
  // Export the functions if using modules
  module.exports = { saturdayFun, mondayWork, wrapAdjective, receivesAFunction, returnsANamedFunction };


  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function");
    };
  }
  
  // Export the functions if using modules
  module.exports = { saturdayFun, mondayWork, wrapAdjective, receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
  