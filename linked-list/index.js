import LinkedList from "./base.js";
import DoublyLinkedList from "./doubly.js";
import CircularLinkedList from "./circular.js";

const list = LinkedList();
const doublyList = DoublyLinkedList();
const circular = new CircularLinkedList();

// list.append(2);
// list.append(5);
// list.append(7);
// list.append(15);

// list.insertAt(3, 20);

// // list.removeAt(3);
// list.indexOf(20);
// list.remove(20);

// console.log(list.toString());

// doublyList.append(2);
// doublyList.append(5);
// doublyList.append(20);
// doublyList.append(7);

// doublyList.insertAt(3, 25);

// console.log(doublyList.toString());

// doublyList.removeAt(5);

// console.log(doublyList.toString());
// console.log(doublyList.toStringInReverse());

circular.append(20);
circular.append(30);
circular.append(40);
circular.append(50);
console.log(circular.removeAt(2));
circular.insert(70, 3);
circular.deleteHead();
circular.delete(70);
console.log(circular.toArray());
