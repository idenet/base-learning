# 作为一等公民的函数

## 来看一个例子

```
var hi = function(name){
  return "Hi " + name;
};

var greeting = function(name) {
  return hi(name);
};
```

这里其实很怪，`greeting`调用了`hi`，但其实下面的代码完全可以写成

```
var greeting = hi

greeting("times");
// "Hi times"
```

如果不用`()`就是简单返回`hi`变量里的函数，**这就是所说的 js 中的函数既可以变量、又可以是参数，还可以是返回值**。所以既然`hi`已经是一个接收参数的函数了，为什么还要用一个函数去包裹

再来看看下面这个例子

```
var getServerStaff = function(callback){
  return ajaxCall(function(json){
    return callback(json)
  })
}
```

很奇怪是不是，同上面他就是

```
var getServerStaff = ajaxCall
```

那么这行

```
return ajaxCall(function(json){
    return callback(json)
  })

// 就等于
return ajaxCall(callback)
```

那么重构下

```
var getServerStaff = function(callback){
  return ajaxCall(callback);
}
```

继续优化

```
var getServerStaff = ajaxCall
```
