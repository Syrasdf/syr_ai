// 不是JS 单线程
// Worker 线程 用来做复杂或耗性能的计算
// 这个能力来自于浏览器
// js 仍然是单线程语言，只不过在复杂计算时候用worker 线程
// 不可以使用document，也没有this
// 线程间的通信，通过消息机制
// console.log(this,'////');
// console.log(document.getElementById('box'));
self.onmessage = function(e) {
  console.log(e);
  self.postMessage('Hello Worker');//调用主线程
}