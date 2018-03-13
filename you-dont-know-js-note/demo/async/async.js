async function foo(val) {
	if (val > 1) {
		// 递归委托
		val = await foo( val - 1 );
	}

	return await 2;
}

async function bar() {
	var r1 = await foo( 3 );
	console.log( r1 );
}

bar();