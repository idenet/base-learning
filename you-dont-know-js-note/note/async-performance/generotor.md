# 生成器
回调表达异步流程的关键缺陷
- 基于回调的异步不符合大脑对任务步骤的规划方式
- 由于控制反转，回调并不是可信任或可组合的  
promise姜控制反转回来，恢复了可信任可组合性。而现在的generator则将异步流程编程一种顺序的同步的控制表达风格。

## 打破完整运行
```
function *foo(x) {
	var y = x * (yield);
	return y;
}

var it = foo( 6 );

// 开始`foo(..)`
it.next();

var res = it.next( 7 );

res.value;		// 42
```
第一个next启动一个generator，然后运行至第一个yield，如果yield后面有值，则第一个next输出yield后面的值，第二个进行计算。

## 生成器迭代器
```
function *something() {
	var nextVal;

	while (true) {
		if (nextVal === undefined) {
			nextVal = 1;
		}
		else {
			nextVal = (3 * nextVal) + 6;
		}

		yield nextVal;
	}
}
```
一个无限生成nextval的函数，我可以使用forof循环下去，并且break
```
for (var v of something()) {
	console.log( v );

	// 不要让循环永无休止！
	if (v > 500) {
		break;
	}
}
// 1 9 33 105 321 969
```