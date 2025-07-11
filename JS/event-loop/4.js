console.log('同步代码开始');
const promise1 = Promise.resolve('Fist Promise')
const promise2 = Promise.resolve('Second Promise')
const promise3 = new Promise(resolve => {
  console.log('promise3')
  resolve('Third Promise')
})

promise1.then(res => {
  console.log(res)
})
promise2.then(res => {
  console.log(res)
})
promise3.then(res => {
  console.log(res)
})
setTimeout(() => {
  console.log('setTimeout')
}, 0)

console.log('同步end');