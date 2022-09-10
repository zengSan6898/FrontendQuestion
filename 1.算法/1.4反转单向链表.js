/**
 * 根据数组创建单向链表
 */
function createSingleLink(arr) {
  const len = arr.length;
  let curNode = { value: arr[len - 1] };
  if (len === 1) return curNode;
  for (let i = arr.length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }
  return curNode;
}
/**
 * 反转单向链表
 */
function reverseLink(head) {
  let curNode = undefined;
  let nextNode = head;
  let preNode = undefined;
  while (nextNode) {
    if (curNode && !preNode) {
      delete curNode.next;
    }
    if (curNode && preNode) {
      curNode.next = preNode;
    }
    preNode = curNode;
    curNode = nextNode;
    nextNode = nextNode.next;
  }
  // 最后一个尾巴的时候 没有nextNode
  curNode.next = preNode;
  return curNode;
}
const r = createSingleLink([1,2,3,4,5,6]);
// console.log(JSON.stringify(r));
// console.log('反转链表~~~~', JSON.stringify(reverseLink1(r)));

function reverseLink1 (head) {
  let curNode = head;
  let preNode = null;
  while (curNode) {
    const next = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = next;
  }
  return preNode;
}
console.log('反转链表~~~~', JSON.stringify(reverseLink1(r)));