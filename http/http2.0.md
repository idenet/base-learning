# http2.0

## 多路复用

http1.1 的请求数是被限制的，而 http2.0 把 http 协议的通信的基本单位缩小为一个一个帧，这些帧对应着逻辑流中的消息，并行的在同一个 TCP 连接上**双向交换**消息

### 二进制分帧

http2.0 把 http 的首部和 body 分割为更小的消息和帧，并采用二进制格式编码。让这些消息在一个 tcp 连接中完成

## 首部压缩

去掉一些不必要的首部

## 服务端推送

服务器可以向客户端推送需要的资源
