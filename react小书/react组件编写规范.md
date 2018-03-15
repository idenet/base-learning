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
