# react-redux

redux 提供了一种数据流通方式`subscribe`渲染函数，`dispatch`action.type 来修改 state，然后自动重新渲染。并且通过共享结构对象来避免重新渲染未改变对象的问题

既然 react 有 context 这个危险的对象，那么让他结合 redux 会怎么样呢。

这就是 react-redux

## 只用 redux 带来的问题

通过自己写的 redux，Index 组件定义 context，并将 store 传出，其他子组件接收。通过`_updateThemeColor`函数更改子组件默认 state。store.subscribe 订阅`_updateThemeColor`函数，在 switch 组件点击按钮，`dispatch`这个更改

1.  有大量重复的逻辑：取出 context 中的 store，然后用里面的状态设置自己组件的状态
2.  对 context 的依赖性过强：因为依赖 context 组件复用性基本为零

## 那么如何解决

使用高阶组件包装 store 的获取，然后将 props 传递给被包装的组件。而那种叫它干什么就干什么的组件称之为 dumb 组件，要多写 dumb 组件，增强复用性

## connect

1.  通过 connect 获取 store
2.  通过给 connect 传入的函数 mapStateToProps 来获取 state
3.  整合传给 connect 的 props 和 store 的 state 传给子组件
4.  订阅`_updateProps`函数
5.  通过给 connect 传入的函数 mapDispatchToProps 来获取 dispatch

## provider

现在只剩根组件还有 context 的代码，那么如何剔除呢。react-redux 的做法是额外构建一个组件来做，这个组件作为整个组件树的根节点。那么它的子组件都能获得 context 了

我们把这个组件叫 Provider，因为它提供（provide）了 store
