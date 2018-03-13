# react 基本用法

## 使用 jsx 描述 UI 信息

在使用 react 的时候，根据上面的例子，可以明显猜出 react 中的 Components，和 reactDOM 是用来干嘛的

### jsx 的作用

如果将 html 用 js 的对象来表示其实是可以的，所以 react 就用一种 jsx 语法来表示 html，经过 jsx 转义就会成为对象形式的 js。**所谓的 jsx 就是 js 的对象**

babel 编译+reactjs 构造------> ReactDOM.render()
jsx -----> js 对象结构 -----> DOM 元素 ------> 插入页面

### 为什么不直接渲染

间接这层可以对各种 dom 结构进行处理，比如 canvas 或者转成原生 app

### jsx 的功能

在 jsx 中可以随便书写 js 代码，即使是 html 的属性，除了 class 要替换成 className，label 中的 for 要替换成 htmlFor。
**注意**：在 jsx 中常用的是三目运算非常方便

## 组件

有别于以往的 html 形式，现在这种组件套组件的方式更容易工程化，形成的组件树页非常直观

## 事件监听

react 已经将大部分事件封装和解决兼容性问题，所以只要 on*就能使用了
**注意**：这些```on*```的事件只能绑定在 html 标签上，而不能用在组件标签上

### event

所有事件都会传入 event 对象，这个对象经过 react 内部封装，解决了各个浏览器之间的兼容性问题
**注意**：在 bind 中是可以传入参数的，那么注意回调函数实现的时候，event 是最后输入的行參

### 关于 this

jsx 中的事件回调，在 react 内部并不是通过组件实例调用的，而是直接调用的。所以 this 是 undefined，因此最好使用 ES5 的 bind 方法绑定 this

## 组件中的 state 和 setState

state 一般用于保存组件自己的状态

setState: 从前面可以知道 setState 是用来传入改变的 state 状态并且，调用 render 重新渲染的。从行为上来说只要传入改变的状态就行了，对未改变的状态不建议传入
**注意**：setState 中的函数是传到一个消息队列中的，如果你在 setState 中操作，想要在外面获取这个改变是没有作用的。相当于异步消息

### setState 接收函数参数

那么如何解决这个问题呢？

react 开发者完全知道这个需求，你只需要传入函数，并返回这个结果，就能爱下个 setstate 中的回调里获取
**⚠️**：在外面你还是没法获取这个改变的；而且多个回调只会被全部加入到消息队列渲染一次

## 配置组件的 props

从例子可以看出，props 可以传很多东西，方法、对象、数值等等，因此作为配置参数非常有用

### 配置默认的 props

给传入的 props 一个默认值非常常见，因此 react 提供了一个方法使得能够使用对象的形式提供默认值

```
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }
```

**⚠️**：props 在传递给子组件后是不能再通过 setState 修改的，但是可以通过重新渲染父组件来达到修改 props 的目的

## 总结 state 和 props

**state**：组件控制自己的状态

1.  state 的作用主要在于自身，不能作用域外部
2.  在组件内部初始化，setState 可以修改 state 状态，setState 会导致 dom 重新渲染

**props**：外部对组件进行配置

1.  props 用于父组件配置子组件
2.  子组件无法修改，除非父组件重新输入 props。

**⚠️**：尽量少写 state，尽量多用 props

### 函数式组件

一种只传入 props 的组件

```
const HelloWorld = (props) => {
  const sayHi = (event) => alert('Hello World')
  return (
    <div onClick={sayHi}>Hello World</div>
  )
}
```
