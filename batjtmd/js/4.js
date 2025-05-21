//全局的 js 代码在执行之前，会进行一个预编译的过程，会将所有的 var 变量提升到当前作用域的最前面，
//var变量提升了 
console.log(value); // 1

if (false) {
  var value = 1;//申明全局变量
}

// undefined 有
console.log(value); // 1