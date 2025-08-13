需求

api.github.io/users/shunwuyu/repos
api.github.io/users/LeetAt67/repos

- 有一堆的异步任务要执行，但是只允许同时执行两个任务。
- 每一项是一个promise
- Promise.all 会等待所有的promise执行完成，返回一个数组。
- 所有项都解决了，都成功解决了，Promise.all才会解决。
  不然就会失败。
- 如果都成功，每个promise结果 会按照 promise 下标存放
- Promise.all 是静态方法，不是实例化方法。