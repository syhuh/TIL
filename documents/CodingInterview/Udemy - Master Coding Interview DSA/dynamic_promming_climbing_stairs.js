// Ref:
// 1.https://leetcode.com/problems/climbing-stairs/

// ----------------------------------------------------------------------------------------------
// Dynamic Programming
// Similar to Fibonacci
function find_cases(){
  let cache = {};

  return function cases(num) {
    if(num in cache){
      return cache[num];
    }
    else {  
      if(num <= 2){
        cache[num] = num;        
        return cache[num];    
      }
      else{
        cache[num] = cases(num - 1) + cases(num - 2);
        return cache[num];
      }
    }  
  }  
}

// ----------------------------------------------------------------------------------------------
// Test Drive
const case_fn = find_cases();

console.log(case_fn(3));
console.log(case_fn(4));
console.log(case_fn(5));
console.log(case_fn(6));
console.log(case_fn(7));
console.log(case_fn(8));
console.log(case_fn(9));
console.log(case_fn(100));