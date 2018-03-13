// s实现一个函数可以进行以下计算
// add(1)(2)(3) = 6
// add(1, 2, 3)(4) = 10
// add(1)(2)(3)(4)(5) = 15

function add() {
  var _args = [].slice.call(arguments)
  var fn = function () {
    var arg_fn = [].slice.call(arguments)
    return add.apply(null, _args.concat(arg_fn))
  }
  fn.valueOf = function () {
    return _args.reduce((a, b) => {
      return a + b
    }) 
  }
  return fn
}


var c = add(1)(2)(3)
console.log(c)
// console.log();
add(1, 2, 3)(4);
// console.log();
add(1)(2)(3)(4)(5);
