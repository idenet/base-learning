const _ = R

// Exercise 1
//==============
// 使用 Ramda 改写下面的 words 函数，达到同样的分词功能但是删除 str 参数。

var words = function(str) {
  return split(' ', str)
}

words = _.split(' ') // 函数被柯里化了

// Exercise 1a
//==============
// 编写 sentences 函数，类似于 words，但是它可以对一个数组的字符串进行分词
// 例如 ['Hello World', 'Goodbye World'] 处理成 [['Hello', 'World'], ['Goodbye', 'World']]

var sentences = _.map(words)

// Exercise 2
//==============
// 使用 Ramda 和 match（在 support.js 中定义）
// 改写以下函数，把它所有函数在定义的时候的参数都删除掉（xs、x）。

var filterQs = function(xs) {
  return filter(function(x) {
    return match(/q/i, x)
  }, xs)
}

filterQs = _.filter(match(/q/i))

// Exercise 3
//==============
// 使用 _keepHighest 函数和 Ramda 改写 max 函数，删除它函数定义的时候的参数（xs、acc、x）

// _keepHighest 保持不变
var _keepHighest = function(x, y) {
  return x >= y ? x : y
}

// 改写下面的函数
var max = function(xs) {
  return reduce(
    function(acc, x) {
      return _keepHighest(acc, x)
    },
    -Infinity,
    xs
  )
}

max = _.reduce(_keepHighest, -Infinity)
