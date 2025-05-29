/**
 * 
 * @param {number} total 
 * @param {number} num 
 * @return {number[]}
 */
function hongbao(total, num) {
  const arr = [];
  let restAmount = total; // 剩余金额
  let restNum = num; // 剩余个数

  for (let i = 0; i < num - 1; i++) {
    // 二倍均值法
    const max = (restAmount / restNum) * 2;
    const amount = parseFloat((Math.random() * max).toFixed(2));
    restAmount -= amount;
    restNum--;
    arr.push(amount);
  }
  arr.push(parseFloat(restAmount.toFixed(2)));
  return arr;
}

console.log(hongbao(100, 10));