# 异步
程序中现在运行的部分和将来运行的部分之间的关系就是异步编程的核心
## 事件循环
ES6之后，js才真正内建有直接的异步概念。以前js所做的只不过在需要的时候，在给定的任意时刻执行程序中的单个代码块。  
所有js运行环境都提供了一种机制来处理程序中多个块的执行，且执行每块时调用js引擎，这种机制称为事件循环。

## 任务
在ES6中，有一个新的概念建立在事件循环队列之上，叫做任务队列。
它是挂在事件循环队列的每个tick之后的一个队列，在事件循环的每个tick中，可能出现的异步动作不会导致一个完整的新事件添加到事件循环队列中，而会在当前 tick 的任务队列末尾添加一个项目(一个任务)。
```
console.log( "A" );
  setTimeout( function(){
    console.log( "B" );
}, 0 );
// 理论上的"任务API"
schedule( function(){
	console.log( "C" );

	schedule( function(){
		console.log( "D" );
	} );
} );
// A C B D
```

