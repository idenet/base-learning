# 生成器+promise
yield一个promise出来，然后通过这个promise控制生成器的迭代。

## 带有promise的generotor生成器
```
// 感谢Benjamin Gruenbaum (@benjamingr在GitHub)在此做出的巨大改进！
function run(gen) {
	var args = [].slice.call( arguments, 1), it;

	// 在当前的上下文环境中初始化generator
	it = gen.apply( this, args );

	// 为generator的完成返回一个promise
	return Promise.resolve()
		.then( function handleNext(value){
			// 运行至下一个让出的值
			var next = it.next( value );

			return (function handleResult(next){
				// generator已经完成运行了？
				if (next.done) {
					return next.value;
				}
				// 否则继续执行
				else {
					return Promise.resolve( next.value )
						.then(
							// 在成功的情况下继续异步循环，将解析的值送回generator
							handleNext,

							// 如果`value`是一个拒绝的promise，就将错误传播回generator自己的错误处理g
							function handleErr(err) {
								return Promise.resolve(
									it.throw( err )
								)
								.then( handleResult );
							}
						);
				}
			})(next);
	  });
}
```
