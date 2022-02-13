class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new QueueNode(value);

    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      throw new Error("Can't dequeue and empty queue.");
    }

    const front = this.front;
    this.front = this.front.next;
    this.size--;

    if (this.size === 0) {
      this.back = null;
    }

    return front.value;
  }
}

const queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");

console.log(queue);

console.log(queue.dequeue()); // a
console.log(queue);

console.log(queue.dequeue()); // b
console.log(queue);

console.log(queue.dequeue()); // c
console.log(queue); // null

console.log(queue.dequeue());
