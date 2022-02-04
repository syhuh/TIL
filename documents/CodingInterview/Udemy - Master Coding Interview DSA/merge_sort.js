const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  const length = array.length;
  if(length === 1){
    return array;
  }

  // Split array into left and right
  let half = Math.round(length / 2);
  let left = [];
  let right = [];
  
  for(let i = 0; i < half; i++){
    left.push(array[i]);    
  }
  for(let i = half; i < length; i++){
    right.push(array[i])
  }

  console.log('mergeSort: ', left, right);

  return merge(mergeSort(left), mergeSort(right));    
}

// Reference: Merge sort in 3 minutes(https://www.youtube.com/watch?v=4VqmGXwpLqc)
// My solution is clearer than Andrei's one
function merge(left, right){
  let arr = [];

  console.log('merge:', left, right);

  while(left.length > 0 && right.length > 0){
    if(left[0] > right[0]){
      arr.push(right.shift());      
    }
    else{
      arr.push(left.shift());
    }
  }

  while(left.length > 0){
    arr.push(left.shift());
  }

  while(right.length > 0){
    arr.push(right.shift());
  }

  return arr;
}

const answer = mergeSort(numbers);
console.log('Result: ', answer);