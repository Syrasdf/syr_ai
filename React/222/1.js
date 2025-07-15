// 纯函数
// 相同的输入，一定会有一样的输出
// 没有副作用，不操作外部变量、不发送请求，不改DOM
// 管理数据状态 纯函数去管  全局状态更正确
// 重要 一堆的地方都需要用到它
// 修改值，修改方法  流程

function add(a,b,obj) {
  obj.item = '111'
  return a + b;
}

// 不纯的
// 操作外部变量、发送请求、改DOM
let total = 0;
function addTotal(a) {
  total += 1;
  return total;
}
