// Map 和 WeakMap 的区别

let obj = {a:1,b:2,c:3};
// 太常用，大型语音都内置的，[],{}
// HsahMap 字典 0 (1)  key:value
const target = new Map();// 实例化 es6 新的数据结构 map 
target.set('c',3);
console.log(target.get('c'));
target.set(obj,4);// 和JSON 不一样的地方 对象做key
console.log(target.get(obj));

let obj2 = {name:'张三'};
const target2 = new WeakMap(); // Weak 弱的，
target2.set(obj2,'code 秘密花园');
obj2 = null;// 内存垃圾的回收
console.log(target2.get(obj2));
