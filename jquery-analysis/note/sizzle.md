# sizzle选择器
一般涌来处理复杂的选择，div div.hot>span，不过可以使用elemnt.querySlectorAll()函数，只要ie8以上，都可以使用这个函数。但是如果要兼容更低版本就不如这个了。

## 源码分析
源码基本按照几个步骤走
1. 判断selectot是否为字符串
2. 使用正则对selector进行匹配
3. 依次考虑ID、class、tagname等情况
4. 如果时复杂的选择，可以使用querySlectorAll则使用，不能(IE<8)则调用select函数

## sizzle太难了，不看了
