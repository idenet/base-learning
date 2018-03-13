# 回调
回调函数包裹或者说封装了程序的延续。  
js的引擎室单线程运行的事件循环队列，不是多任务，而是在任务之间快速的切换。 
第一，大脑对于事情的计划方式是线性的、阻塞的、单线程的语义，但是回调表达异步流 程的方式是非线性的、非顺序的，这使得正确推导这样的代码难度很大。难于理解的代码 是坏代码，会导致坏 bug。  
第二，也是更重要的一点，回调会受到控制反转的影响，因为回调暗中把控制权交给第三 方(通常是不受你控制的第三方工具!)来调用你代码中的 continuation。这种控制转移导 致一系列麻烦的信任问题，比如回调被调用的次数是否会超出预期。  
可以发明一些特定逻辑来解决这些信任问题，但是其难度高于应有的水平，可能会产生更 笨重、更难维护的代码，并且缺少足够的保护，其中的损害要直到你受到 bug 的影响才会 被发现。  