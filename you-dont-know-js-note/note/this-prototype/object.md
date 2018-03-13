# 对象
## 复制对象
浅复制：es6新增方法object.assign，第一个参数是目标对象，之后多个是源对象，将源对象中的可枚举属性全部复制到目标对象

## 属性描述符
1. writable决定是否可以修改属性的值
2. Configurable是否可以修改配置属性，注意这个修改为false，不能在之后继续修改，是一个单向操作，且修改为false后，连delete都没有效果了
2. Enumerable是否可枚举

## get
在一次属性访问中，其实是一次get操作。

## put
会判断writable属性

## 存在性
object.keys会返回一个数组包含所有可枚举属性，in和hasOwnProperty(..)的区别在于是否查找[[Prototype]]链。

## 遍历
for..in循环用来遍历对象的可枚举属性列表（包括原型链）。且最好不要用来遍历数组  
数组中可以使用forEach、every、some等方法。
1. forEach会遍历数组中的所有值，并忽略回调函数的返回值
2. every会一直运行直到回调函数返回false
3. some会一直运行直到回调函数返回true  
ES6增加了一种for..of循环来遍历数组属性