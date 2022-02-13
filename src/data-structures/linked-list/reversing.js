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

// n  a->b->c->d->
// p  c
// n<-a<-b->c->d->
//    p  c
// n<-a<-b<-c->d->
//       p  c
// n<-a<-b<-c<-d->
//          p  c
// n<-a<-b<-c<-d
//             p  c
// t: O(n) s: O(1)
const reverseIterative = (head) => {
  let prev = null;
  let next = null;
  let curr = head;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;

    curr = next;
  }

  return prev;
};

const reverseRec = (curr, prev = null) => {
  // when the end of the list is reached, next of d, return prev, which is d
  // which is expected to be the head finally
  if (curr === null) return prev;

  // temporary
  const next = curr.next;

  // reversing relationship
  curr.next = prev;

  return reverseRec(next, curr);
};

const print = (head) => {
  if (head === null) return "";
  console.log(head.value);
  print(head.next);
};

print(a);
console.log("---");
print(reverseRec(a));
