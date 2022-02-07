// Use global variable
let cache_global = {};

function memoizedAddTo80(n){
  if(n in cache_global){
    console.log("Get from cache!")
    return cache_global[n];
  }
  else{
    console.log("Takes long time!");
    cache_global[n] = n + 80;
    return cache_global[n];
  }
}
console.log("===== Use Global Variable =====");
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(6));
console.log(memoizedAddTo80(5));

// Use JavaScript's Closure
function memoizedAddTo80UsingClosure(){
  let cache = {};

  return function(n){
    if(n in cache){
      console.log("Get from cache!");
      return cache[n];
    }
    else{
      console.log("Takes long time!");
      return cache[n] = n + 80;
    }
  };
}

const memoized = memoizedAddTo80UsingClosure();

console.log("===== Use JavaScript's Closure =====");
console.log(memoized(5));
console.log(memoized(6));
console.log(memoized(5));

