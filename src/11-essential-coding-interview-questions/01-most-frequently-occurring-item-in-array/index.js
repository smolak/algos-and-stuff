/**
 * Target time: O(n)
 */

const mostFrequentlyOccurringItem = (numbers) => {
  const map = new Map();
  let winner = {
    number: null,
    occurrences: -1,
  };

  for (let number of numbers) {
    if (map.has(number)) {
      map.set(number, map.get(number) + 1);
    } else {
      map.set(number, 1);
    }

    if (map.get(number) > winner.occurrences) {
      winner.number = number;
      winner.occurrences = map.get(number);
    }
  }

  return winner.number;
};

console.log(mostFrequentlyOccurringItem([1, 3, 1, 3, 2, 1]));
