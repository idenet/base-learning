# 程序性能
## web workers
web works不是js提供的多线程支持，而是浏览器提供的多线程支持API
```
var w1 = new Worker( "http://some.url.1/mycoolworker.js" );
```
其中的这个works将被浏览器独立在一个县城中执行。
- 注意worker之间以及它们和主程序之间，不会共享任何作用域和资源。它们通过一个消息机制传递信息
- 在 Worker 内部是无法访问主程序的任何资源的，但是可以执行网络操作(Ajax、WebSockets)以及设定定时器，页可以访问几个重要的全局变量和功能的本地副本--navigator、location、JSON 和 applicationCache。  

webwork一般应用于
- 处理密集型数学计算
- 大数据集排序
- 数据处理(压缩、音频分析、图像处理等)
- 高流量网络通信