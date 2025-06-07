const arr = ['1', '2', '3'];
console.log(typeof arr); // [3, 4]
const date = new Date();
console.log(typeof date); // 2021-01-01T00:00:00.000Z  
//如何区分Object的这些类型？[深入]
console.log(Object.prototype.toString.call(arr)); // [object Array]
console.log(Object.prototype.toString.call(date));
//会在MBN文档看一些资料（大厂水平）
function getType(value) {
  //String api 的选择
  // split + substring
  // slice
  return Object.prototype.toString.call(value).slice(8, -1);
}//（中厂能够理清）

//slice(8, -1) 的作用是去掉字符串的前 8 个字符（ [object ）和最后一个字符（ ] ）
// ，从而得到具体的类型名称。
console.log(getType(arr));
console.log(getType(date));
