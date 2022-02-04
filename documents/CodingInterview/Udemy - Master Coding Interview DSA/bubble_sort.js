const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for(let j = 0; j < array.length; j++){
    for(let i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        //swap
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
      }
    }  
  }
}

bubbleSort(numbers);
console.log(numbers);