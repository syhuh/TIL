//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = [1, 2, 4, 5, 6, 44, 63, 87, 99, 283, 0];

// I refered 'Insert-sort with Romanian folk dance(https://www.youtube.com/watch?v=ROalU379l3U)
// My solution is clearer than Andrei's one. (I don't use splice function)
function insertionSort(array) {
  const length = array.length;
  console.log(array);

  for(let j = 0; j < length - 1; j++){    
    for(let i = j + 1; i > 0; i--){   
      console.log(`j:${j}, i:${i}, array[i]:${array[i]}, array[i-1]:${array[i-1]}`);              
      let temp;
      if(array[i] < array[i-1]){
        //Swap
        temp = array[i-1];
        array[i-1] = array[i];
        array[i] = temp;        
      }
      else{                
        break;
      }
    }
    console.log(array);
  }   
}

insertionSort(numbers);
console.log(`Result: [${numbers}]`);