/**
 * 利用单向链表实现队列的思路
 * 首先定义链表的头，尾
 * 从尾部添加，从头部删除，因为头部出队可以得到next,直接删除，否则尾部出队不能得到preNode
 * 
 */
class Queue {
  head = null;
  tail = null;
  len = 0;
  add (value) {
    let newNode = {
      value: value,
      next: null
    };
    if (this.head === null) this.head = newNode;
    if (this.tail) {
      this.tail.next = newNode;
    }
    // 从尾部添加元素
    this.tail = newNode;
    this.len++;
    return this.head;
  }
  delete () {
    if (this.len <= 0 || this.head === null) return null;
    const headValue = this.head.value;
    const headNode = this.head;
    this.head = headNode.next;
    this.len--;
    return headValue;
  }
  len () {
    return this.len;
  }
}
const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.add(4);
console.log(JSON.stringify(q.add(5)));
console.log(q.delete());