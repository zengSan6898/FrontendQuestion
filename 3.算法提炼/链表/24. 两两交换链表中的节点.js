function changetwoNode (head, newNode) {
  let temp = newNode;
  newNode.next = head;
  while (temp.next && temp.next.next) {
    const one = temp.next;
    const two = temp.next.next;
    temp.next = two;
    one.next = two.next;
    two.next = one;
    temp = one;
  }
}