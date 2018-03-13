# Promise
回调主要缺陷，缺乏顺序性和可信任性  
一种在异步任务中作为两个或者更多步骤的流程控制机制，时许上的this、then、that。

## 完成事件
```
function foo(x) {
	// 开始做一些可能会花一段时间的事情

	// 制造一个`listener`事件通知能力并返回

	return listener;
}

var evt = foo( 42 );

evt.on( "completion", function(){
	// 现在我们可以做下一步了！
} );

evt.on( "failure", function(err){
	// 噢，在`foo(..)`中有某些事情搞错了
} );
```
foo(..) 显式创建并返回了一个事件订阅对象，调用代码得到这个对象，并在其上注册了两个事件处理函数,这种吧控制交还给代码是一种更好的方式。

## Promise信任问题
以往回调编码的信任问题有：
- 调用回调过早;
- 调用回调过晚(或不被调用);
- 调用回调次数过少或过多;
- 未能传递所需的环境和参数;
- 吞掉可能出现的错误和异常。  
对于用 Promise.resolve(..) 为所有函数的返回值(不管是不是 thenable) 都封装一层。另一个好处是，这样做很容易把函数调用规范为定义良好的异 步任务。  
简单总结一下Promise的固有特性：
- 调用 Promise 的 then(..) 会自动创建一个新的 Promise 从调用返回。
- 在完成或拒绝处理函数内部，如果返回一个值或抛出一个异常，新返回的(可链接的)Promise 就相应地决议。
- 如果完成或拒绝处理函数返回一个 Promise，它将会被展开，这样一来，不管它的决议值是什么，都会成为当前 then(..) 返回的链接 Promise 的决议值。

## 错误处理
```
var p = Promise.resolve( 42 );
     p.then(
         function fulfilled(msg){
            // 数字没有string函数，所以会抛出错误
             console.log( msg.toLowerCase() );
         },
function rejected(err){ 
  // 永远不会到达这里
} );
```
就如描述的如果，msg合法的抛出一个错误，那么这个错误就不会被promise接收，那么这个错误就会被吞噬。这个问题ES6并没有规定去解决，而是浏览器去实现了错误的捕捉和抛出。但是当浏览器没有回收这个promise呢？  
new Promise(..)其中的回调是同步的或立即调用的。  
当心!若向Promise.all([ .. ])传入空数组，它会立即完成，但Promise. race([ .. ]) 会挂住，且永远不会决议

