{
  let c = $.fn.extend({a: 1}, {a:2,b: 1});
  console.log(c)
  console.log('-----------------')
}

{
  let a = {a:{a:1}}, b = {b:{b:1}}
  $.extend(a, b)
  console.log(a, b)
  b.b.b = 2; // 浅拷贝拷贝的是引用，当b对象中的对象修改后，影响到了a对象；当然如果仅仅是简单的数值拷贝完全没有问题
  console.log('--------------');
}

{
  let a = {a:{a:1}}, b = {b:{b:1}}
  $.extend(true, a, b)
  console.log(a, b)
  b.b.b = 2 // 深拷贝，是数值拷贝通过递归将数值重新复制；这里要注意的是，赋值是在编译阶段完成的
  console.log('--------------'); 
}