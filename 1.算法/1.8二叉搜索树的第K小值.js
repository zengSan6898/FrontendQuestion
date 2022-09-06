/**
 * 求二叉搜索树的第k个最小值
 * 
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class binarySearchTree {
  root = null;
  add (data) {
    const node = new Node(data);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNodeData(node,this.root);
    }
    return this.root;
  }
  insertNodeData (newNode, node) {
    if (node.data >= newNode.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        return this.insertNodeData(newNode,node.left);
      }
    } else if (node.data < newNode.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        return this.insertNodeData(newNode, node.right);
      }
     
    }
    return node;
  }
  // 前序遍历二叉树
  qSearchTree (root) {
    let calldata = [];
    const callback = (data) => {
      return data;
    }
    const opreate = function (node, callback) {
      if (node !== null) {
        calldata.push(callback(node.data));
        opreate(node.left, callback);
        opreate(node.right, callback);
      }
    }
    opreate(root, callback);
    return calldata;
  }
  // 中序遍历二叉树 左根右
  midQsearch (root) {
    let callData = [];
    const callback = function (data) {
      return data;
    }
    const ordeOprate = function (node, callback) {
      if (node !== null) {
        ordeOprate(node.left, callback);
        callData.push(callback(node.data));
        ordeOprate(node.right, callback);
      }
    }
    ordeOprate(root, callback);
    return callData;
  }
  // 后序遍历二叉树 左根右
  lQsearch (root) {
    let callData = [];
    const callback = function (data) {
      return data;
    }
    const ordeOprate = function (node, callback) {
      if (node !== null) {
        ordeOprate(node.left, callback);
        ordeOprate(node.right, callback);
        callData.push(callback(node.data));
      }
    }
    ordeOprate(root, callback);
    return callData;
  }

}
const tree = new binarySearchTree();
tree.add(10);
tree.add(6);
tree.add(11);
tree.add(3);
tree.add(4);
tree.add(7);
tree.add(9);
tree.add(18);
tree.add(13);
tree.add(19);
// console.log(JSON.stringify(tree, null, 2));
// console.log(tree);
console.log(tree.qSearchTree(tree.root)) //前序遍历
console.log(tree.midQsearch(tree.root)) //中序遍历
console.log(tree.lQsearch(tree.root)) //中序遍历
// 返回第K小的值就是 
let k= 3
const kData = tree.midQsearch(tree.root)[k - 1];
console.log(kData);