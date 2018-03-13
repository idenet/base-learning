# jquery 中的事件和动画

## jquery 中的事件

### 加载 dom

**$(document).ready()**在 dom 树完全就绪时就可以被调用
**$(元素).load()**在所有内容(包括窗口、框架、对象和图像)加载完毕后触发，绑在元素上一样

### 事件绑定

bind 绑定事件

### 合成事件

1. hover(enter, leave)
2. toggle(fn1, fn2...fnN) 切换元素的可见状态

### 事件冒泡

因为 dom 事件是会冒泡的，如果你在子元素和父元素都绑定了事件，点击子元素后，服元素的事件也会被响应。为了解决这个问题，就需要停止冒泡

### 事件对象的属性

1. event.type 事件类型
2. event.target 获取触发事件的元素
3. event.pageX/Y 光标相对于页面的坐标

### 移除事件

通过 unbind 移出事件

### 模拟操作

trigger()自动触发方法，或者自定义方法  
triggerHandler()触发 focus 事件，并且取消默认的

## jquery 中的动画

### show 和 hide 方法

show 和 hide 方法就是操作 css 中的 display 来实现隐藏和显示，往该方法中传入参数(ms)会有动态效果

### fadeIn 和 fadeOut 方法

淡入淡出效果

### slideUp 和 slideDown 方法

变长变短效果

### 自定义动画 animate

`animate(params, speed, callback)`

1. params: 一个包含样式及其属性值的映射
2. speed：速度
3. callback：动画完成时执行的回调

### 停止动画和判断是否处于动画状态

1. 停止元素的动画：stop(清空未执行完的动画队列，直接将正在执行的动画跳到末状)
2.
