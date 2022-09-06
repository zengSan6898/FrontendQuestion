/**
 * 实现斐波那契数列的函数 
 * 递归实现
 * 优化实现
 * 算法的变形： 一只青蛙一次可以跳一级台阶，也可以跳2级台阶，青蛙跳到n级台阶有几种方式。
 */
// 时间复杂度是 O(2的n次方)
function feibonaqi1 (n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return feibonaqi1(n - 1) + feibonaqi1(n - 2);
}
console.log(feibonaqi1(9))

function feibonaqi2 (n) { 
  let fbnq = [0, 1];
  for (let i = 2; i <= n; i++) {
    fbnq[i] = fbnq[i - 1] + fbnq[i - 2];
  }
  return fbnq[n];
}
console.log(feibonaqi2(100))