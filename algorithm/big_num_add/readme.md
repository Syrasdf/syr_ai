# 大数相加

- 高精度 
  js Number 类型，不分整数、浮点数、高精度......
  js 不大适合计算 python 适合
  表现力强 

- 大数相加问题
  边界溢出
  Infinity  无穷大
  -Infinity  无穷小
  Number.MAX_VALUE  1.7976931348623157e+308
  Number.MIN_VALUE  5e-324

- String 字符串化
  
- es6 bigInt 大数类型
  可以表示任意大的整数
  可以进行加减乘除
  可以进行比较

## BigInt 类型   
   安全 2^53 - 1  9007199254740991
   Number.MAX_SAFE_INTEGER  9007199254740991
   es6  新增的第六种简单数据类型
   后面加 n 
   表示 bigInt 类型 

   BitInt（"123"）,不能 new
   无限大，无溢出问题
   不能混合 Number 和 bigInt 运算
   JS 适合大型项目开发