// 记忆化搜索
const f = []
const climbStairs = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  if (f[n] === undefined) f[n] = climbStairs(n-1) + climbStairs(n-2);
  return f[n];
  // 三个等号 值与类型都相等
}

console.log(climbStairs(100));