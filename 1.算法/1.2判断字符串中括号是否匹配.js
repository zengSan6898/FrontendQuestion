/**
 * 给一个字符串，判断括号是否匹配 包含字符和括号()[]{}
 * 解题思路：通过数据结构栈判断，左括号入栈，右括号和栈中的最顶部的比较 匹配就出栈，最后判断栈是否是空，空的话匹配否则false
 * 
 */
// 空间复杂度 O(n) 时间复杂度 O(n)
function isAdaptation (str) {
  const stack = [];
  const pp = { ')': '(', ']': '[', '}': '{' };
  for (let i = 0; i < str.length; i++) {
    if (['(', '{', '['].includes(str[i])) {
      stack.push(str[i]);
    } else if (pp[str[i]] === stack[stack.length - 1] ) {
      stack.pop();
    }
  }
  return stack.length===0
}
console.log(isAdaptation('(fdsfsd){fsasfsfds[{][222]}'))