# 代码规范

## 方法命名规范

1.  监听的事件使用`on`开头、即使是传递数据(props)的自定义方法
2.  需要 bind 的事件处理用`handle`开头

## 组件内容编写顺序

1.  static 开头的类属性，如 defaultProps、propTypes。
2.  构造函数，constructor。
3.  getter/setter。
4.  组件生命周期。
5.  \_ 开头的私有方法。
6.  事件监听方法，handle\*。
7.  render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头。
8.  render() 方法。

## 划分 Dumb 组件和 Smart 组件

所有的`Dumb`组件都在`components`目录下。

所有的`Smart`组件都在`containers`目录下

## 组件划分原则

在各种业务场景下，组件的划分要按业务和功能来，将能独立使用的功能抽离成`base`。在该项目下的功能抽成`components`，其他则是`containers`

## reducer 编写个人规范

1.  定义`action-types`
2.  编写`reducer`
3.  跟这个`reducer`相关的`action creator`
