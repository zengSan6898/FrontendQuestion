/**
 * 给一个递增数组，找出两个和为target的两个数
 * [1,2,3,4,5] 找到和为8的两个数 3 5
 */
/**
 * 嵌套循环思路：循环的比较数组中的每一个值
 * 外层循环是从0到arr.length-1
 * 内层循环是从 1到arr.length 依次比较每个数据
 * 定义一个flag变量标记是否找到两数之和，对循环进行break;
 * 时间复杂度可达到O(n*n)
 */
function twoNumbersAdds (arr, target) {
  let res = [];
  const len = arr.length;
  if (len === 0) return res;
  for (let i = 0; i < len - 1; i++) {
    const num1 = arr[i];
    let flag = false;
    for (let j = i + 1; j < len; j++) {
      if (num1 + arr[j] == target) {
        res.push(num1);
        res.push(arr[j]);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  return res;
}
/**
 * 双指针思路： 因为数组是递增的 直接定义两个指针，
 * 一个指向数组头 一个指向数组尾部，然后判断两个指针指向数据之和taget比较，
 * >target 头部向后移动
 * <target 尾部向后移动，==target的时候，返回当前的指针指向的数据 都没有则返回 null
 * 时间复杂度 O(n)
 * @param {*} arr 
 * @param {*} target 
 */
function twoNumbersAdds1 (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (end > start) {
    if (arr[start] + arr[end] > target) {
      end = end - 1;
    } else if (arr[start] + arr[end] < target) {
      start = start + 1;
    } else {
      return [arr[start], arr[end]];
    }
  }
  return [];
}
const r = twoNumbersAdds1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
console.log(r);
const r2 = twoNumbersAdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
console.log(r2);