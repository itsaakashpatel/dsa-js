import AvlTree from './avl.js';
import BinaryTree from './binary.js';

let bt = new BinaryTree();
let avl = new AvlTree();

for (let index = 0; index < 1000; index++) {
  avl.insert(index);
}

// bt.insert(15);
// bt.insert(10);
// bt.insert(20);
// bt.insert(5);
// bt.insert(12);
// bt.insert(8);

//Sorted array
// let max = 10;
// let start = 0;
// let middle = Math.floor(start + max / 2);
// bt.insert(middle);

// for (let index = start; index < max; index++) {
//   if (index === middle) continue;
//   else bt.insert(index);
// }
// bt.minimum();
// bt.maximum();

// bt.search(3);

// const tree = bt.getTree();
const tree1 = avl.getTree();

console.log(avl.getHeight(tree1));

// console.log(bt.inOrderTraversal(tree));
// console.log(bt.isBalancedTree(tree));
