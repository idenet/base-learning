# React 评论实战

## 组件划分

在拿到一个 psd 之后思考如何对组件进行划分，这一步其实很重要，划分的好 html 的基本结构就出来了。  
划分的方法

1.  从总体到点面
2.  如果是有数据参与的小组件，最好不要拆分，但是可以可以将逻辑和展示分离

## 双向绑定

普通的从数据到 UI 都是单向绑定，react 通过 setState 改变 state 来调用 render 再次渲染。  
那么从 UI 到数据，一般指的是 input 标签，通过 onchange 事件调用 setState 达到重新渲染的目的。这就是双抗绑定

## 向父组件传递数据

props 真的是一个神奇的东西，props 可以传递一切，那么只要父组件给子组件传递一个函数，子组件给这个函数传入回调，父组件就能获取子组件的数据。

### 新增功能

1.  自动聚焦到评论框
    * 使用 ref 获取 dom 节点，调用 domAPI
2.  用户持久化，输入用户名后保存到 localstorage
    * 监听 onblur 事件，通过事件调用 locastorage 方法
3.  持久化评论
    * 通过 onsubmit 事件存储，willmount 周期获取
4.  显示评论发布时间
5.  删除评论
    * 通过状态提升的方式，传递事件到 app 中删除
6.  显示代码块
    * 注意 xss 攻击，需要转义 html
