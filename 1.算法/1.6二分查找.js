/**
 * 适用于有序的数组中进行二分查找
 * 凡有序必二分，时间复杂度包含log(n)
 * 方法一：循环
 * 方法二：递归
 */
function binarySearch1 (arr, target) {
  if (arr.length == 0) return -1;
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    let midIndex = Math.floor((endIndex + startIndex) / 2);
    let midValue = arr[midIndex];
    if (midValue < target) {
      startIndex = midIndex + 1;
    } else if (midValue > target) {
      endIndex = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
  
}
function binarySearch2 (arr, target, startIndex, endIndex) {
  if (arr.length === 0) return -1;

  if (!startIndex) startIndex = 0;
  if (!endIndex) endIndex = arr.length-1;
  if (startIndex > endIndex) return -1;

  
  let midIndex = Math.floor((endIndex + startIndex) / 2);
  let midValue = arr[midIndex];


  if (midValue < target) {
    return binarySearch2 (arr, target,  midIndex + 1, endIndex)
  } else if (midValue > target) {
    return binarySearch2 (arr, target,  startIndex,  midIndex - 1)
  } else {
    return midIndex;
  }
}

console.log(binarySearch1([1, 2, 3, 5, 6], 6));
console.log(binarySearch2([1, 2, 3, 5, 6], 6));