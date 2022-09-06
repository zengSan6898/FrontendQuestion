/**
 * 思路：取数组的中间数字，然后循环数组，将大于中间位置的数放在right数组中,
 * 小于中位数的数放在数组left中，然后返回 return 递归left concat 中位数 concat right
 *      
 * 时间复杂度是 O(n*logn)
 */
function quikSearch (arr) {
  if (arr.length === 0) return [];
  const left = [];
  const right = [];
  const midIndex = Math.floor(arr.length / 2);
  const midValue = arr[midIndex];
  for (let i = 0; i < arr.length; i++) {
    if (i !== midIndex) {
      if (arr[i] > midValue) {
        right.push(arr[i]);
      } else if (arr[i] <= midValue) {
        left.push(arr[i]);
      }
    }
  }
  return quikSearch(left).concat([midValue], quikSearch(right));
}
const t = quikSearch([1, 3, 2, 7, 6, 4, 5, 2,8])