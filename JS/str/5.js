//变量的声明
//公司有编程风格（风格保持一致）
let str = "hello";
var str2 = "world";
const strObj = new String("hello"); 
var str3 = '123';
//模板字符串
const str4 = `hello${str2}`
console.log(str4)
- 使用反引号 ` 定义的字符串称为模板字符串。
- 模板字符串支持嵌入表达式，例如 ${str2} ，其中 str2 是一个变量，其值会被插入到字符串中
- 输出helloworld