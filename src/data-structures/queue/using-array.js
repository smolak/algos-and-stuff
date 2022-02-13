export class Queue {
  constructor(capacity) {
    if (capacity === undefined) {
      throw new Error("Please provide queue's capacity.");
    }

    if (capacity < 1) {
      throw new Error("Queue's capacity must be positive.");
    }

    this.capacity = capacity;
    this.items = [];
  }

  getCapacity() {
    return this.capacity;
  }

  enqueue(value) {
    if (value && this.length() < this.capacity) {
      this.items.push(value);
    }
  }

  length() {
    return this.items.length;
  }

  dequeue() {
    const [value, ...rest] = this.items;
    this.items = rest;

    return value;
  }
}
