let count = 0;

function inception(){
  console.log(count);
  if (count > 3){
    return 'Done! Last count is ' + count;
  }
  count++;
  return inception();
}

console.log(inception());