/**
 * 使用两个栈来实现队列的数据结构
 * 思路就是，定义两个空的数组栈，statck1是主栈，stack2是辅助栈，入栈的时候stack1直接push即可
 *          删除的时候需要3个步骤，首先将当前的stack1全部顺序出栈到stack2中，然后stack2中出栈，删除元素。
 *          然后将stack2中元素出栈到stack1中，返回stack1即可。
 */
// 空间复杂度 两个栈中存储的数据就是N
class queue {
  stack1 = [];
  stack2 = [];
  // 时间复杂度是 O(1)
  add = function(num) {
    this.stack1.push(num);
    return this.stack1;
  }
  // 时间复杂度是O(n)
  delete = function () {
    let res;
    while (this.stack1.length) {
      const n = this.stack1.pop();
      this.stack2.push(n);
    }
    res = this.stack2.pop();
    while (this.stack2.length) {
      const n = this.stack2.pop();
      this.stack1.push(n)
    }
    return res || null;
  }
  count () {
    return this.stack1.length;
  }
}
const t = new queue();
t.add(100);
t.add(200);
t.add(300);
console.log(t.delete());
console.log(t.delete());
console.log(t.count());