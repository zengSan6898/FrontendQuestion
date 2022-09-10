/**
 * 判断输入的字符中括号是否匹配正确
 * 解题思路：利用栈结构解决
 */
function stackIs (str) {
  const charP = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    console.log('stack[stack.length.length - 1]~~~~', stack[stack.length.length - 1])
    if (['(', '[', '{'].includes(str[i])) {
      stack.push(str[i]);
    } else if (charP[stack[stack.length - 1]] === str[i]) {

      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(stackIs('fafd(fsadfds)[fsdfdsf](){fsdfsdf}'))