# 原生函数
常用的原生函数有
- String
- Number
- Boolean
- Array
- Object
- Function
- RegExp
- Date
- Error
- Symbol
通过new创建后，是封装对象，而不是基本类型值。基于游览器的优化，我们不需要直接使用封装对象，而是让游览器自己去判断什么时候去使用  
symbol并非对象，而是一种简单标量几本类型

## 原生原型
- String#indexOf(..)：在一个字符串中找出一个子串的位置
- String#charAt(..)：访问一个字符串中某个位置的字符
- String#substr(..)，String#substring(..)，和String#slice(..)：将字符串的一部分抽取为一个新字符串
- String#toUpperCase()和String#toLowerCase()：创建一个转换为大写或小写的新字符串
- String#trim()：创建一个截去开头或结尾空格的新字符串。  
以上都不改变原字符串，而是返回一个新串