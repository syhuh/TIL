// Write two functions that finds a factorial of any number. 
// One should use recursive and the other should just use a for loop.
function findFactorialRecursive(num){
  let answer;

  if(num === 1){
    return 1;
  }    

  answer = num * findFactorialRecursive(num - 1)
  return answer;
}

function findFactorialIterative(num){
  let answer = 1;

  for(let i = num; i > 0; i--){
    answer = answer * i
  }

  return answer;
}

console.log(findFactorialRecursive(3));
console.log(findFactorialIterative(3));