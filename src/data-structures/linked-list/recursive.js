class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }

    this.#append(value, this.head);
  }

  #append(value, curr) {
    if (curr.next === null) {
      curr.next = new Node(value);
      return;
    }

    this.#append(value, curr.next);
  }

  print() {
    console.log(this.#print(this.head));
  }

  #print(curr) {
    if (curr === null) return "";

    return curr.value + "->" + this.#print(curr.next);
  }

  contains(value) {
    return this.#contains(value, this.head);
  }

  #contains(value, curr) {
    if (curr == null) return false;

    return curr.value === value ? true : this.#contains(value, curr.next);
  }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");
list.append("d");

console.log(list.head);
list.print();

console.log(list.contains("a")); // true
console.log(list.contains("b")); // true
console.log(list.contains("c")); // true
console.log(list.contains("d")); // true
console.log(list.contains("z")); // false

const numbersList = new LinkedList();
numbersList.append(11);
numbersList.append(7);
numbersList.append(10);
numbersList.append(2);

// time O(n) space O(n)
const sumList = (list) => {
  if (list === null) return 0;

  return list.value + sumList(list.next);
};

console.log(sumList(numbersList.head));
