function foo(a) {
  var b = a;
  return a + b;
}
var c = foo(2);

// 根据赋值操作的目标和赋值操作的源头
// 目标 c 隐式a=2中的a b=a中的b
// 源头 foo(2  b=a中的a 最后a+b会被引擎在此确认，进行一次rhs