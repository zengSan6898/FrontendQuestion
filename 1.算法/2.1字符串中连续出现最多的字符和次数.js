/**
 * 求字符串中连续出现字符最多的次数以及 字符，比如：abbcccddeee1234得到的是e 4次
 */
/**
 * 解法一：传统的双层嵌套:j=0 i=j嵌套循环，跳步的条件  
 * 内层循环j===str.length-1 || str[i]!==str[j] 并且i<str.length-1 跳出循环 i=j-1
 * 解法二: 双指针方法
 *   定义两个指针 i j, j不动，i继续移动，如果i和j的值一直相等则i继续移动。知道j和i不相等
 *   则j追赶上i继续循环执行上述步骤。
 */
function findCpopyStr (str) {
  let res = {
    length: 0,
    value: null,
  };
  if (str.length === 0) return res
  for (let i = 0; i < str.length; i++) {
    let tempLen = 0;
    console.log('i后来的值~~~~~~', i)
    for (j = i; j < str.length; j++) {
      if (str[i] === str[j]) {
        tempLen++;
      }
      if (j===str.length-1 || str[i] !== str[j]) { //当内层循环到头 或者是 遇到不相同的字符的时候
        console.log('j----', j, 'i---', i);
        if (tempLen > res.length) { //赋值 取最大值
          res.length = tempLen;
          res.value = str[i];
        }
        // 嵌套循环，第一个指针开始指向第一个元素，第二个指针从第一个指针开始依次向后移动
        // 当发现 第一个指针小于整个字符串长度范围并且第一个指针指向和第二个指针指向字符不同，
        // 就移动第一个指针
        if (i < str.length - 1) {
          i = j - 1;
          console.log('跳步时候的i~~~', i)
        }
        break;
      }
    }
  }

}
// findCpopyStr('aaabbbccccdef');

function findCpopyStr1 (str) {
  let res = {
    len: 0,
    char: null,
  };
  let j = 0;
  if (str.length === 0) return res;
  let tempLen = 0;
  for (i = j; i <= str.length; i++) {
    if (str[i] === str[j] ){
      tempLen ++;
    } else if (str[i] !== str[j] || i === str.length - 1) {
      if (res.len < tempLen) {
        res.len = tempLen;
        res.char = str[j];
      }
      if (i < str.length - 1) {
        j = i;
      }
      
      tempLen = 1;
    }
  }
  return res;
}
console.log('res~~~~~', findCpopyStr1('aaabbbccccdefaaaaaaa'));