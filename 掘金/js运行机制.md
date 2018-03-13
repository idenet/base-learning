# js 运行机制

## 区分进程和线程

* 进程时 CPU 资源分配的最小单位(是能拥有资源和独立运行的最小单位)
* 线程是 CPU 调度的最小单位(线程是建立在进程的基础上的一次运行单位， 一个进程中可以有多个线程)

## 浏览器是多进程的

一般来说打开一个 tab 页对应一个进程，但是浏览器有自己的优化机制，有可能会把多个 tab 页合并为一个进程

### 浏览器包含那些进程

1. Browser 进程(负责协调、主控)，只有一个。作用有：
   * 负责浏览器界面显示，与用户交互
   * 负责各个页面的管理，创建和销毁其他进程
   * 将 Render 进程得到的内存中的 Bitmap，绘制到用户界面上
   * 网络资源的管理和下载等
2. 第三方插件进程：每中类型的插件创建一个进程，仅当使用该插件的时候才创建
3. GPU 进程，最多一个，用于 3D 绘制等
4. 浏览器渲染进程(浏览器内核)(Renderer 进程，内部是多线程的)：默认每个 tap 页一个进程，互不影响
   * 页面渲染，脚本执行和事件处理

### 浏览器多进程的优势

* 避免单个 page crash 影响整个浏览器
* 避免第三方插件 crash 影响整个浏览器
* 多进程充分利用多核优势
* 方便使用沙盒模型隔离插件等进程，提高浏览器稳定性

### 浏览器内核(渲染进程)

**浏览器的渲染进程是多线程的**

1. GUI 渲染线程
   * 负责浏览器渲染，解析 HTML，CSS，构建 DOM 树和 RenderObject 树，布局和绘制等
   * 当界面重绘(Repaint)或由于某种操作引发回流(reflow)时，该线程执行
   * **GUI 渲染线程和 JS 引擎线程时互斥的**，当执行 JS 线程时，GUI 线程会被保存在一个队列中
2. JS 引擎线程
   * JS 内核，处理 js 脚本程序(V8 引擎)
   * 解析 JS 脚本，运行代码
   * 无论什么时候，只有一个 js 线程在运行 js 程序
3. 事件触发线程
   * 归属于浏览器，用来处理事件循环
   * 当执行异步代码的时候，会将对应任务添加到事件线程中
   * 当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾
   * 由于 JS 时单线程，所以这些处理队列中的事件，都需要等到 js 引擎空闲时处理
4. 定时器触发线程
   * setinterval 和 settimeout 所在线程
   * 浏览器定时计数器并不是由 js 引擎计数的
   * 因此通过单独线程来计时并触发定时
   * W3C 规定少于 4ms 的计时，算为 4ms
5. 异步 HTTP 请求线程
   * 在 XMLHttpRequest 连接后通过浏览器新开一个请求
   * 检测到状态变更时，如果有回调函数，异步线程就会产生**状态变更事件**，将这个回调放到事件队列中，由 js 引擎执行

### Browser 进程和浏览器内核(Render 进程)通信的过程

打开浏览器会出现两个进程：**一个是主控进程，一个时打开 tab 页的渲染进程**，然后整个过程为

1. Browser 进程收到用户请求，首先获取页面内容，随后将该任务通过 RenderHost 接口传递给 Render 进程
2. Renderer 进程的 Renderer 接口接收到消息，简单解释后，交给渲染线程，然后开始渲染
   * 渲染线程接收进程，加载网页并渲染网页，这其中可能需要 Browser 进程获取资源和需要 GPU 进程来帮助渲染
   * 当然可能会有 js 线程操作 DOM(这有可能造成回流并重绘)
   * 最后 Render 进程将结果传递给 Browser 进程
3. Browser 进程接收到结果并将结果绘制出来

## 梳理浏览器内核中线程之间的关系

### GUI 渲染线程与 JS 引擎线程互斥

当执行 JS 的时候，GUI 更新会被保存在一个队列中等 js 线程空闲在执行

### JS 阻塞页面加载

所以如果 JS 执行时间过长就会阻塞页面。因此要避免 js 执行时间过长

### WebWorker JS 的多线程

这是一个 HTML5 中的 API

1. 创建 Worker 时，JS 引擎向浏览器申请开一个子线程(子线程时浏览器开的，完全受主线程控制，而且不能操作 DOM)
2. JS 引擎线程和 Worker 线程间通过特定的方式通信(postMessage API，需要通过序列化对象来与线程交互特定数据)

所以若果有非常耗时的计算，可以放在 worker 中计算好以后，传给主线程

### WebWorker 和 SharedWorker

1. WebWorker 只属于某个页面，不会和其他的 render 进程共享
   * 所以是每个 render 创建一个新的线程来运行 Worker
2. SharedWork 是所有页面共享的，不能采用与 worker 同样的实现方式
   * 所以浏览器会为 SharedWorker 创建一个进程来运行 js 程序

## 简单梳理下浏览器渲染流程

* 浏览器输入 url，浏览器主进程接管，开一个下载线程，然后进行 http 请求，获取内容随后将内容通过 renderHost 接口转交给 Render 进程
* 渲染流程开始

渲染分为下面几个步骤

1. 解析 HTML 建立 DOM 树
2. 解析 CSS 构建 Render 树(将 css 代码解析成树形的数据结构，然后结合 DOM 合并成 render 树)
3. 布局 render 树(layout/rereflow)，负责各元素尺寸、位置的计算
4. 绘制 render 树(paint)，绘制页面像素信息
5. 浏览器会将各层的信息发送给 GPU，GPU 会合成(composite)，显示在屏幕上

### loader 事件与 DOMContentLoaded 事件的先后

1. 当 DOMContentLoaded 事件触发时，仅当 DOM 加载完成，不包括样式、图片等
2. load 事件触发时，页面渲染完毕

### CSS 加载是不是会阻塞 DOM 树的渲染

这里只讨论头部 css，**CSS 是单独线程异步下载的**

1. CSS 加载不会阻塞 DOM 树解析
2. 但会阻塞 DOM 树渲染(render 树需要 css 信息)

### 普通图层和复合图层

渲染图层一般包含两大类：普通和复合图层

1. 普通文档流是一个复合图层(absolute 和 fixed 虽然脱离了普通文档流，但还是复合图层)
2. 快译通过硬件加速声明一个新的复合图层(这个图层时单独创建的)
3. GPU 中各个复合图层是单独绘制的，互不影响

#### 如何变成复合图层(硬件加速)

1. 最常用的方式：translate3d、tranlateZ
2. opacity：动画执行的过程中才会创建合成层
3. video、iframe、canvas、webgl 等元素
4. 其他

#### absolute 和硬件加速的区别

absolute 中信息的改变，会导致整个复合层的绘制。硬件加速只会在自己的复合层中重绘

#### 复合图层作用

虽然使用会提升性能，但是大量使用仍会造成页面卡顿

#### 硬件加速时使用 index

使用时，尽可能使用较大的 index 值，防止浏览器默认给后续的元素创建复合层渲染

## 从 Event Loop 谈 js 运行机制

* js 分为同步任务和异步任务
* 同步任务都在主线程上执行，形成一个执行栈
* 主线程外，事件触发线程管理一个任务队列，只要异步任务有了运行结果，就在任务队列中放置一个事件
* 一旦主线程空闲，系统就会读取任务队列，将可运行的异步任务加到队列中执行

### 单独说说定时器

1. 事件循环的核心：js 引擎线程和事件触发线程
2. 定时器时专门用定时器线程控制的
3. 注意当主线程在执行代码，即使 settimeout 已经吧回调插入执行栈了，也不会马上调用，而是等主线程执行完毕
4. 而 interval 更有问题

## 事件循环进阶 macrotask(task) 和 microtask(jobs)

在 ES6 中添加了 promise 等之后新添加了一个概念，microtask

```
console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
    console.log('promise1');
}).then(function() {
    console.log('promise2');
});

console.log('script end');
```

执行顺序

```
script start
script end
promise1
promise2
settimeout
```

两者之间的区别

1. macrotask(宏任务)，可以理解每次执行栈执行的代码就是一个宏任务(包括每次从事件队列中获取一个事件回调并放到执行栈中执行)
   * 每个 task 会从头到尾将这个任务执行完毕，不会执行其他
   * 浏览器为了能够使 js 内部 task 和 DOM 任务能够有序执行，会在一个 task 执行结束之后，在下一个 task 执行开始之前，对页面进行重新渲染(task->渲染->task->....)
2. microtask(微任务)，可以理解是在当前 task 执行结束后立即执行的任务
   * 也就是在当前 task 之后，下一个 task 开始之前，在渲染之前
   * 所以他的响应速度比 settimout 等 task 更快，无需等待渲染
   * 在某个 task 执行完毕之后，在其中产生的 microtask 都会在渲染前执行完毕

**那么那些是 macro 那些时 micro 呢**

* macrotask：主代码块，settimeout、setinterval、setimmediate
* microtask：process.nextTick(在 node 中)、promise、MutationObserver

最后总结

* macrotask 的事件都放在一个事件队列中，而这个队列由事件触发线程维护
* microtask 由 js 引擎线程维护（推测

总结运行机制

* 执行一个宏任务(栈中没有就从事件队列中获取)
* 执行中遇到为任务就将微任务添加到微任务队列中
* 宏任务执行完毕后，立即执行当前队列中的所有微任务(依次执行)
* 当前宏任务中的微任务执行完毕之后，开始检查渲染，然后 GUI 线程接管渲染
* 渲染完毕之后，js 线程继续接管，开始下一个宏任务(从事件队列中获取)

## Vue2.5+

vue 中的高版本跟高了，nextTick 的实现方式，默认的方式还是走 microtask，只有在一些 dom 交互事件上会强制走 macrotask
对于 macrotask 优先使用 setImmediate，不支持的话使用 MessageChannel，如果也不支持的话就用 settimeout 0
