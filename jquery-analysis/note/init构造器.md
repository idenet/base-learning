# init构造器
无new实现、链式调用完成之后就是入口方法，jquery.fn.init。在读源码之前先看看init的接收的参数
```
init: function (selector, context, root) {
  ...
}
```
- jQuery()，空参数，这个会直接返回一个空的jQuery对象，return this
- jQuery( selector [, context ] )，这是一个标准且常用法，selector表示一个css选择器，这个选择器通常是一个字符串，#id或者.class等，context表示选择范围，即限定作用，可为DOM，jQuery对象。
- jQuery( element|elements )，用于将一个DOM对象或DOM数组封装成jQuery对象。
- jQuery( jQuery object|object )，会把普通的对象或jQuery对象包装在jQuery对象中。
- jQuery( html [, ownerDocument ] )，这个方法用于将html字符串先转成DOM对象后在生成jQuery对象。
- jQuery( html, attributes )，和上一个方法一样，不过会将attributes中的方法和属性绑定到生成的htmlDOM中，比如class等。
- jQuery( callback )，此方法接受一个回掉函数，相当于window.onload方法，只是相对于。

## jQuery.fn.init
看看源码
```
init: function (selector, context, root) {
  var match, elem;

  // 处理: $(""), $(null), $(undefined), $(false)
  if (!selector) {
    return this;
  }
  // rootjQuery = jQuery( document );
  root = root || rootjQuery;

  // 处理 HTML 字符串情况，包括 $("<div>")、$("#id")、$(".class")
  if (typeof selector === "string") {

  //此部分拆分，留在后面讲

  // HANDLE: $(DOMElement)
  } else if (selector.nodeType) {
    this[0] = selector;
    this.length = 1;
    return this;

  // HANDLE: $(function)
  } else if (jQuery.isFunction(selector)) {
    return root.ready !== undefined ? root.ready(selector) :

    // Execute immediately if ready is not present
    selector(jQuery);
  }

  return jQuery.makeArray(selector, this);
}
```