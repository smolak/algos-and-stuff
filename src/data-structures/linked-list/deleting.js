class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a->b->c->d->

// time: O(n); space O(1)
const deleteValue = (head, value) => {
  if (head.value === value) return head.next;

  let curr = head;
  let prev = null;

  while (curr !== null) {
    if (curr.value === value) {
      prev.next = curr.next;
    }

    prev = curr;
    curr = curr.next;
  }

  return head;
};

// time: O(n); space O(n) - stack frames
const deleteValueRec = (head, value) => {
  if (head.value === value) return head.next;

  deleteRec(head, null, value);

  return head;
};

const deleteRec = (curr, prev, value) => {
  if (curr === null) return;

  if (curr.value === value) {
    prev.next = curr.next;
    return;
  }

  deleteRec(curr.next, curr, value);
};

const print = (head) => {
  if (head === null) return "";
  console.log(head.value);
  print(head.next);
};

print(a);
console.log("---");

print(deleteValueRec(a, "a")); // a->b-d->
