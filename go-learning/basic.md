# go 基础

## go 中的变量

1.  go 的变量都是有初始值的，int 为 0，string 是一个空串
2.  go 具有类型推断功能，可以省略 type
3.  可以用 `:=`来定义变量
4.  在函数外定义其实是在包内定义，go 没有全局变量的说法，在包内可以用`var( aa = 1)`的形式
5.  **用`:=`这种形式，只能在函数內用**

### 内建变量类型

1.  布尔类型：bool.
2.  字符串：string.
3.  有符号整形：int int8 int16 int32 int64
4.  无符号整形：uint uint8 uint16 uint32 uint64 uintptr.
5.  字节：byte(8 位) rune(32 位)
6.  浮点数：float32 float64.
7.  复数：complex64 complex128.

### 强制类型转换

1.  类型转换是强制的

### 常量

1.  常量相当于一个文本，
2.  常量数值可以作为各种类型使用
3.  使用一组常量作为枚举类型

## 变量中的要点

1.  变量类型写在变量名之后
2.  编译器可推测变量类型
3.  没有 char，只有 rune
4.  原生支持复数类型

## 循环

1.  if 的条件里可以赋值
2.  if 的条件里赋值的变量作用域就在这个 if 语句里

## switch

1.  switch 会自佛那个 break，除非使用 fallthrough
2.  注意在`panic`里面会直接报错，不会执行 switch 语句

## for

1.  for 的条件里不需要括号
2.  for 饿条件里可以省略初始条件，结束条件，递增表达式
3.  省略初始条件和结束条件，相当于 while

## 函数要点

1.  返回值类型写在最后面
2.  可返回多个值
3.  函数作为参数
4.  没有默认参数，可选参数
5.  可变参数列表

## 指针

1.  指针不能运算

### 参数传递

1.  值传递：拷贝一份值传给函数操作，并不会影响
2.  引用传递: 比如 c/cpp 中的指针

**go 语言只有一种传递方式：值传递**

## 数组、切片和容器

### 数组

1.  数量写在类型前面
2.  通过\_省略变量
3.  不仅仅 range，任何地方都可以通过\_省略变量
4.  如果只要 i， 可以写成 `for i:= range numbers`
5.  range 意义明确、美观
6.  数组是值类型
7.  `[10]int 和 [20]int`是不同的类型
8.  调用的参数是拷贝
9.  go 语言一般不直接使用数组

### 切片(slice)

1. slice 是 array底层的的一个view，修改slice，原array也会变
2. slice 取的是包含前面不包含后面
3. slice 可以向后扩展，不可以向前扩展
4. 前者不能超过len，后者不能超过cap
5. 添加元素时如果超越cap，系统会重新分配更大的底层数组
6. 由于值传递的关系，必须接收append的返回值

## map
1. 创建 `make(map[string]int)`
2. 获取元素 `m[key]`
3. 可以不存在时，获得value类型的初始值
4. 用 `value, ok := m[key]`来判断是否存在key
5. 用delete删除key
6. 使用range遍历key、value
7. 遍历不保证顺序
8. 使用len获取元素个数
9. map使用哈希表，必须可以比较相等
10. 除了slice、map、function
11. Struct类型不包含上述字段也可以作为key

## rune
1. rune就相当于go的char

## 字符串操作
1. fields split join
2. contains index
3. tolower toupper
4. trim trimRight trimLeft