# 原型
prototype机制就是存在于对象中的一个内部链接，这个链接的作用是：  
如果在对象上没有找到需要的属性或者方法引用，引擎就会继续在prototype关联的对象上进行查找。同理，如果在后者中也没有找到需要的引用就会继续查找它的[[Prototype]]，以此类推。这一系列对象的链接被称为“原型链”。

## 关联关系是备用
```
var anotherObject = {
	cool: function() {
		console.log( "cool!" );
	}
};

var myObject = Object.create( anotherObject );

myObject.doCool = function() {
	this.cool(); // 内部委托
};

myObject.doCool(); // "cool!"
```
将委托的代码封装，让调用者以为在执行myobject的属性。