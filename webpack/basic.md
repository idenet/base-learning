# 概念

## 核心基础

1.  入口
2.  输出
3.  laoder
4.  插件

### 入口

1.  多入口配置就是，在 entry 里写一个数组，或者对象形式
2.  使用`commonschunkplugin`提取多页应用中共同的部分

### 出口

如果是多个起点，使用占位符来确保每个文件具有唯一性

```
entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
// 输出 ./dist/app.js ./dist/search.js
```

### loader

webpack loader 将所有类型的文件，转换为应用程序的依赖图

1.  test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
2.  use 属性，表示进行转换时，应该使用哪个 loader。
3.  一组链式的 loader 将按照相反的顺序执行

### 插件

require 插件后，使用 new 操作符来创建插件实例就可以了
