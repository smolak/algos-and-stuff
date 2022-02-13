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

    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = new Node(value);
  }

  print() {
    let values = "";
    let curr = this.head;

    while (curr !== null) {
      values += curr.value + "->";
      curr = curr.next;
    }

    console.log(values);
  }

  contains(value) {
    let curr = this.head;

    while (curr !== null) {
      if (curr.value === value) {
        return true;
      }

      curr = curr.next;
    }

    return false;
  }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");
list.append("d");
// a -> b -> c -> d

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

// time O(n) space O(1)
const sumList = (list) => {
  let sum = 0;
  let curr = list;

  while (curr !== null) {
    sum += curr.value;

    curr = curr.next;
  }

  return sum;
};

console.log(sumList(numbersList.head));
