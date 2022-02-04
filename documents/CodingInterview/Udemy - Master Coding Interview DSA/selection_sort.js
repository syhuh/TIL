const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  let j = 0

  for(let j = 0; j < length; j++){
    let temp = array[j];
    let min_index = j;
    
    for(let i = j + 1; i < length; i++){                  
      if(array[i] < array[min_index]){
        min_index = i;
      }
    }

    // Swap
    array[j] = array[min_index];
    array[min_index] = temp;
  }   
}

selectionSort(numbers);
console.log(numbers);