function* infiniteValues(startingFrom) {
  while (true) {
    yield startingFrom;
    startingFrom++;
  }
}

function* incrementTill(from, to) {
  while (from <= to) {
    yield from;
    from++;
  }
}

const infiniteFrom = infiniteValues(1);

console.log(infiniteFrom.next().value); //1
console.log(infiniteFrom.next().value); //2
console.log(infiniteFrom.next().value); //3
console.log(infiniteFrom.next().value); //4
//...

const limitedIncremental = incrementTill(1, 5);

console.log(limitedIncremental.next().value); //1
console.log(limitedIncremental.next().value); //2
console.log(limitedIncremental.next().value); //3
console.log(limitedIncremental.next().value); //4
console.log(limitedIncremental.next().value); //5
console.log(limitedIncremental.next().value); //undefined
