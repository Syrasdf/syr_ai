/*
* 
* @param {String} num1
* @param {String} num2
* @returns {String}
*
*/

function addLargeNumbers(num1, num2) {
  let result = ''; // 存储结果
  let carry = 0; // 进位
  let i = num1.length - 1; // 从最低位开始
  let j = num2.length - 1; // 从最低位开始
  while (i >= 0 || j >= 0 || carry > 0) { // 只要有一个数还有位或者还有进位
    // 边界
    //细节1：如果 i 或 j 小于 0，说明 num1 或 num2 已经遍历完了，我们可以用 0 来代替。
    //细节2：parseInt() 函数可以将字符串转换为整数。如果字符串不是有效的整数，它将返回 NaN。
    
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0; // 获取num1的当前位  
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0; // 获取num2的当前位
    const sum = digit1 + digit2 + carry; // 计算当前位的和
    result = (sum % 10) + result; // 将当前位的和添加到结果中
    carry = Math.floor(sum / 10); // 计算进位
    i--; // 移动到下一位
    j--; // 移动到下一位
  }
  return result; // 返回结果
  }