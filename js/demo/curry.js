function curry(fn) {
  var args = Array.prototype.slice.call(arguments, 1)
  return function() {
    var innerArgs = Array.prototype.slice.call(arguments)
    var finalArgs = args.concat(innerArgs)
    return fn.apply(null, finalArgs)
  }
}

var add = curry(function(a, b) {
  return a + b
}, 1)

add(3)

/**
 * 函数柯里化，通过传入的fn，确定需要柯里化的函数
 * @param {*} fn
 */
function curry2(fn) {
  var slice = [].slice
  var len = fn.length
  return function curried() {
    var args = slice.call(arguments)
    if (args.length >= len) {
      return fn.apply(null, args)
    }
    return function() {
      return curried.apply(null, args.concat(slice.call(arguments)))
    }
  }
}

var add = curry2(function(a, b, c, d) {
  return a + b + c + d
})
