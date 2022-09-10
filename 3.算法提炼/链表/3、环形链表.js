/**
 * 给你一个链表的头节点 head ，判断链表中是否有环。
 * 思路一：循环节点，将节点存储在set中，判断set中是否有节点，有的话就是环 没有false
 * 思路二：双指针，快指针一个两步  慢指针前进一步，碰撞一起则有环 否则没有false
 */
function isLinkHas (head) {
  let linkSet = new Set();
  while (head) {
    if (linkSet.has(head)) {
      return true;
    }
    linkSet.add(head);
    head = head.next;
  }
  return false;
}
// 快慢指针方法 时间复杂度是O(n)
function isLinkHas1 (head) {
  let p0 = head;
  let p1 = head;
  while (p0 && p1 && p1.next) {
    p0 = p0.next; // 
    p1 = p1.next.next; //
    if (p0 == p1) {
      return true;
    }
  }
  return false;
}
/**
 * 142. 环形链表 II
 * 给定一个链表的头节点  head ，
 * 返回链表开始入环的第一个节点。 
 * 如果链表无环，则返回 null。
 */
function detectCycle1 (head) {
  const headSet = new Set();
  while (head) {
    if (headSet.has(head)) {
      return head;
    }
    headSet.add(head);
    head = head.next;
  }
  return null;
}
// 通过 快慢指针找到环形节点， 
// 然后从头节点开始，和慢指针比较，每个指针移动一步
// 相等的时候就是
function detectCycle2 (head) {
  let p0 = head;
  let p1 = head;
  while (p0 && p1 && p1.next) {
    p0 = p0.next;
    p1 = p1.next.next;
    if (p0 === p1) {
      let pre = head;
      while (pre !== p0) { 
        pre = pre.next;
        p0 = p0.next;
      }
      return pre;
    }
  }
  return null;
}