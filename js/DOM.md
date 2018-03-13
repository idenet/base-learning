# 文档对象模型 DOM

将整个页面映射为一个多层节点结构

# DOM 级别

## DOM 一级

由 DOM 核心和 DOMHTML 组成

* DOM 核心规定如何映射 HTML
* DOMHTML 添加了针对 HTML 的对象和方法

## DOM 二级

添加了鼠标和用户界面事件、范围、遍历等方法。  
DOM2 引入来下列新模块

* DOM 视图
* DOM 事件
* DOM 样式
* DOM 遍历和范围

---

# DOM 扩展

## 选择符 API

通过接收一个 css 选择符，返回需要的 node 或者 nodeList

1. querySelector()
2. querySelectAll()

## HTML5

### 与类相关的扩充

1. getElementByClassName()
2. classList
   * add()：将给定的字符串值添加到列表中，如果已经存在，就不添加
   * contains()
   * remove()
   * toggle():切换或者添加类

### 焦点管理

1. document.activeElment 获取焦点 dom
2. document.hasFocus() 确定文档是否获取了焦点

---

# DOM2 和 DOM3

## 样式

1. 偏移量
   * offsetHeight 整个元素高度
   * offsetWidth 整个元素宽度
   * offsetLeft
   * offsetTop
2. 客户区大小: 内容高度加上上下内边距
   * clientHeight
   * clientWidth
3. 滚动大小
   * scrollHeight 元素内容的真实高度
   * scrollWidth 元素内容的真实宽度
   * scrollLeft 被隐藏的内容像素数
   * scrollRight
4. 确定元素大小: getBoundingClientRect() 元素在页面总中相对于视口的位置
   * left
   * top
   * right
   * bottom
