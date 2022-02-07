// Given a number N return the index value of the Fibonacci sequence where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// The pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 --> 2+3
let calculation_recursive = 0;

function fibonacciRecursive(n){ // O(2^n)
  calculation_recursive++;

  if (n < 2){
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

let calculation_dp = 0;

function fibonacciDynamicProgramming(){ // O(n)
  let cache = {};

  return function fibonnaci(n){
    calculation_dp++;

    if (n in cache){
      return cache[n];
    }
    else {
      if (n < 2){
        cache[n] = n;
        return cache[n];
      }
      cache[n] = fibonnaci(n - 1) + fibonnaci(n - 2);
      return cache[n];
    }  
  }
}

console.log("===== Just Recursion =====")
start = Date.now();
console.log(fibonacciRecursive(45));
end = Date.now();
console.log(`Takes ${end - start} msec, ${calculation_recursive} times operations`);

console.log("\n");

const fibonacciDP = fibonacciDynamicProgramming();

console.log("===== Using Dynamic Programming(Memoizing with cache) =====");
start = Date.now();
console.log(fibonacciDP(45));
end = Date.now();
console.log(`Takes ${end - start} msec, ${calculation_dp} times operations`);