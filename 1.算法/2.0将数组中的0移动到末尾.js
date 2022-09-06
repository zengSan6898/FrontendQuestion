/**
 * 例如
 * [1,2,3,0,5,0,6,0] ====> [1,2,3,5,6,0,0,0]
 * [1,2,-4,0,6,-8,0,9] ===> [1,2,-4,6,-8,9,0,0]
 * 移动数组中的0到数组末尾，保持数组中的数据原来的顺序不变，并且只能在原数组上操作
 */
// 时间复杂度 O(n*n)
function move0 (arr) {
  let mylen = 0;
  for (let i = 0; i < arr.length - mylen; i++) {
    if (arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1);
      i--;
      mylen++;
    }
  }
}
/**
 * 解题思路1： 循环数组，然后判断当前元素是0的话push到数组的末尾，
 * mylen=0
 * for index=0 index<arr.length-mylen; index++
 * arr.splice(index,1)
 * index--
 * mylen++
 * 解题思路2：双指针，
 * 定义两个指针，一个指向数组中第一个为0的元素，一个指向数组中第一个不是0的元素，
 * 然后交换两个元素的位置，
 */
// 时间复杂度是 O(n);
function move01 (arr) {
  let k = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    k = arr.indexOf(0);
    if (arr[i] !== 0 && i>k && k>0) {
      j = i;
    }
    if (j > 0 && k > 0 && j > k) {
      const temp = arr[k];
      arr[k] = arr[j];
      arr[j] = temp;
    }

  }
}
// 思路二的另外一种写法
function move011 (arr) {
  if (arr.length === 0) return;
  let i;
  let j = -1;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && j <0) {
      j = i;
    }
    if (arr[i] !== 0 && j >= 0) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
}
const r = [1, 0, 2, 0, 0, 3, 4, 0];
move011(r);
// move0(r);
// move01(r)
console.log('数组的结果是~~~~', r);