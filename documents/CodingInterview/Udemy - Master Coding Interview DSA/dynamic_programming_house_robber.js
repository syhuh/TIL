// Ref: https://leetcode.com/problems/house-robber/

//nums = [1, 2, 3, 1];
//nums = [2, 7, 9, 3, 1];
//nums = [2, 25, 9, 8, 11, 8, 9, 8, 5, 3, 7, 2, 1, 5, 6, 7, 3, 2, 6, 7, 16, 2, 5, 12, 16, 23, 24, 6, 34, 45, 3, 6, 6, 7, 3, 6, 29, 27, 18, 42];
//nums = [2, 25, 9, 8, 11];
nums = [2, 7, 9, 3, 1];

// Recursion
let calculation_recursive = 0;

function lets_rob_recursive(arr, i){ // O(2^n)
  calculation_recursive++;

  let max;

  if (i < 0){
    return 0;
  }
  max = Math.max(lets_rob_recursive(arr, i - 2) + arr[i], lets_rob_recursive(arr, i - 1));
  //console.log('i:', i);
  //console.log('max:', max);
  return max;
}

// Dynamic Programming
let calculation_dp = 0;

function lets_rob_dp() { // O(n)   
  let cache = {};

  return function rob_dp(arr, i) {
    calculation_dp++;

    if (i < 0){
      return 0;
    }
    if(i in cache){
      return cache[i];
    }
    cache[i] = Math.max(rob_dp(arr, i - 2) + arr[i], rob_dp(arr, i - 1));
    
    console.log(`cache[${i}]: ${cache[i]}`);
    return cache[i];
  }
}

console.log("===== Just Recursion =====")
start = Date.now();
console.log(lets_rob_recursive(nums, nums.length - 1));
end = Date.now();
console.log(`Takes ${end - start} msec, ${calculation_recursive} times operations`);

console.log("\n");

const letsRopDP = lets_rob_dp();

console.log("===== Using Dynamic Programming(Memoizing with cache) =====");
start = Date.now();
console.log(letsRopDP(nums, nums.length - 1));
end = Date.now();
console.log(`Takes ${end - start} msec, ${calculation_dp} times operations`);