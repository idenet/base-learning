# 类型
## 内置类型
js有七种内置类型
- null
- undefined
- number
- string
- object
- symbol（es6新增）
除了object其他都是基本类型  
```
typeof null === 'object' // true
```

## 值和类型
js中变量是没有类型的，只有值才有。typeof对undefined和undeclared都返回undefined，通过typeof的安全防范机制来检查undeclared变量