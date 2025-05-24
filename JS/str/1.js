/*
@func 反转字符串
@param {string} str
@return {string}
*/
// function reverseString(str) {
//     //str 是什么类型？ 字符串 简单数据类型  primitive 
//     return str.split('').reverse().join('');
// }//

//函数表达式\

//es5的函数表达式
const reverseString = (str) => {
    return str.split('').reverse().join('');
}

// es6 箭头函数 简洁 function 不要了  用简单的箭头函数代替
// {} 也省了 只有一句话可以省略
// 他是返回值的时候 连return也可以省了

const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString("hello"));

const reverseString = str => str.split('').reverse().join('');
console.log(reverseString("hello"));


//split() 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。
//reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。
//join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
