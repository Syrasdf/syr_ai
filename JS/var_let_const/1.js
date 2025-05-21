// 代码 
// 编译阶段
//   一刹那，实现语法检测， 做点准备阶段（变量查找） 
//   代码->v8引擎-> 预编译（变量提升，函数提升）-> 执行代码
// 执行阶段
// 当前作用域的顶部

showName();//驼峰式命名
console.log(myName);

var myName = '小帅';
function showName() {
  let b = 2;
  console.log(myName);
  console.log('函数执行了');
}
