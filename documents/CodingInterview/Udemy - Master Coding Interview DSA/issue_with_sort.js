const letters = ['b', 'c', 'e', 'a', 'f', 'z', 'h'];
const baskets = [2, 65, 34, 2, 1, 7, 8];

letters.sort();
console.log(letters);
baskets.sort();
console.log(baskets);
baskets.sort((a, b) => a - b);
console.log(baskets);