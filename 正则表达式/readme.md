# 正则表达式

正则表达式是匹配模式，要么匹配字符，要么匹配位置

## 元字符

1.  \b 匹配一个位置
2.  . 匹配除了换行以外的任意字符
3.  * 表示前面的内容可以连续重复使用任意次数
4.  \d 匹配一位数字
5.  * 不是元字符，只匹配它本身
6.  {x} 大括号 x，表示连续重复匹配的次数
7.  \s 匹配任意的空白符、包括空格、制表符(tab)、换行符
8.  \w 匹配字母或数字或下划线或汉字等

```
0xx-xxxxxxxx
/0\d{2}-\d{8}/ 0开头连续2为数字-在连续8位数字
```

```
/\bhi\b.*\bLucy\b/ 匹配hi在匹配任意个不使换行的字符，最后匹配Lucy

两个\b夹在中间的字符必须准确匹配
```
