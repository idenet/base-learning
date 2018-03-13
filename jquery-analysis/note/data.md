# 数据缓存
在以前es5使用递归会有撑破堆栈空间的问题，即上衣执行的函数不会被取代而是被保留了下来，这是内存泄漏的一个点；  
第二个就是dom操作中的回调，这个回调函数会被浏览器执行后保留着，如果过多就会造成泄漏  
第三种就是闭包，注意闭包所引用的变量时一直存在的

## jQuery 的缓存机制
分别有两个函数jQuery.data()和jQuery.fn.data()  
jQuery.data() 有两种使用，一个用于绑定，一个用于查询：
- jQuery.data( element, key, value )
- jQuery.data( element, key )