import LinkedList from "./base.js";

const list = LinkedList();

list.append(2);
list.append(5);
list.append(7);
list.append(15);

list.insertAt(3, 20);

// list.removeAt(3);
list.indexOf(20);
list.remove(20);

console.log(list.toString());
