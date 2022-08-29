/**
 * 数字数组，反转k步 [1,2,3,4,5] 
 * 反转1步 [5,1,2,3,4]
 * 反转2步 [5,4,1,2,3]
 * 反转3步 [5,4,3,1,2]
 * 解题思路：
 *   思路1： 直接在原数组上 将数组 pop（数组末尾删除）并且将pop的值unshift(从数组头部添加进去)
 *   思路2： 将整个数组slice切分成两部分，一部分是反转的，一部分是不需要反转的部分，然后concat拼接一下
 */
// 时间复杂度是 O(n*n) 空间复杂度是O(1)
function rotate1 (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}


// 时间复杂度是 O(n) 空间复杂度是 O(n)
function rotate2 (arr, k) {
  const rotateArr = arr.slice(-k); // 需要旋转的部分
  const endArr = arr.slice(0, arr.length - k);
  return rotateArr.concat(endArr);
}

console.log(rotate1([1, 2, 3, 4, 5, 6], 3))
console.log(rotate2([1,2,3,4,5,6], 3))