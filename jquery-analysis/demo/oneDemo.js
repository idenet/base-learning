var jQuery = function(sselect, context) {
  // 构造函数
}

jQuery.prototype = {
  // 原型
  name: function() {},
  age: function() {}
}
// 这种形式，显然和jquery的调用方式不符，jquery是直接调用方法不需要new的。
var a = new jQuery()
a.name()

// 很显然这种我们马上就会想到这种方式
var jQuery = function(sselect, context) {
  // 构造函数
   return new jQuery();
}

jQuery.prototype = {}

jQuery()

// 那么jquery是怎么做的呢
var jQuery = function () {
  return new jQuery.prototype.init()
}

jQuery.prototype = {
  constructor: jQuery,
  init: function() {
    this.jquery = 1.0;
    return this;
  },
  jquery: 2.0,
  each: function() {
    console.log('each')
    return this;
  }
}
jQuery().jquery  // 1
jQuery.prototype.jquery // 2

jQuery().each() // error

// 那么我们来看一看原型链指向
var jq = jQuery()
jq.__proto__ === jQuery.prototype.init.prototype 
jQuery.prototype.init.prototype.isPrototypeOf(jq) // es5中的判断方法 一个对象是否存在于另一个对象的原型链上

// 那么如果让jq指向jQuery.prototype就可以了
jq.__proto__ === jQuery.prototype;

// 其实jquery使用了一个更佳巧妙的办法
var jQuery = function() {
  return new jQuery.fn.init();
}

jQuery.fn = jQuery.prototype = {
  constructor: jQuery,
  init: function() {
    console.log('init')
    return this
  },
  jquery: '2.0',
  each: function() {
    console.log('each')
    return this
  }
}
jQuery.fn.init.prototype = jQuery.prototype