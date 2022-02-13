class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// t: O(1) space O(n)
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    if (this.size === 0) {
      this.top = new StackNode(value);
    } else {
      const pushedNode = new StackNode(value);

      pushedNode.next = this.top;
      this.top = pushedNode;
    }

    this.size++;
  }

  getTop() {
    return this.top.value;
  }

  pop() {
    if (this.size === 0) return null;

    const poppedNode = this.top;
    this.top = this.top.next;

    this.size--;

    return poppedNode.value;
  }
}

const stack = new Stack();
stack.push("a");
stack.push("b");
stack.push("c");

console.log(stack.size);
console.log(stack.getTop());
console.log(stack.pop());
console.log(stack.size);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size);
