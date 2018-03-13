# 行为委托
本质是对象之间的关联关系

## 面向委托的设计
委托行为意味着某些对象在找不到属性或者方法引用时会把这个请求委托给另一个对象

## 比较思维模型
### 原型面向对象风格
```
function Foo(who) {
	this.me = who;
}
Foo.prototype.identify = function() {
	return "I am " + this.me;
};

function Bar(who) {
	Foo.call( this, who );
}
Bar.prototype = Object.create( Foo.prototype );

Bar.prototype.speak = function() {
	alert( "Hello, " + this.identify() + "." );
};

var b1 = new Bar( "b1" );
var b2 = new Bar( "b2" );

b1.speak();
b2.speak();
```
### 对象关联风格
```
var Foo = {
	init: function(who) {
		this.me = who;
	},
	identify: function() {
		return "I am " + this.me;
	}
};

var Bar = Object.create( Foo );

Bar.speak = function() {
	alert( "Hello, " + this.identify() + "." );
};

var b1 = Object.create( Bar );
b1.init( "b1" );
var b2 = Object.create( Bar );
b2.init( "b2" );

b1.speak();
b2.speak();
```
对象关联风格只关注一件事情：对象之间的关联关系

## 类与对象
es6的class，其实是基于委托的实现。因此可能会又些问题
1. 父类方法被修改会影响到子类方法