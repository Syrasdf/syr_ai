const bigNum = 123456789012345678901234567890123456789n
// BigInt 声明方式 函数声明
// bigint 简单数据类型，不是对象，不是构造函数，不能用new 关键字
//const theNum = new BigInt("123456789012345678901234567890123456789") XXX 
const theNum = BigInt("123456789012345678901234567890123456789") 
//用函数方式传参请用String类型

console.log(bigNum, theNum);
console.log(typeof bigNum, typeof 1);
//console.log(bigNum + 1);
//两者类型不同，不能相加
console.log(bigNum + 1n);
