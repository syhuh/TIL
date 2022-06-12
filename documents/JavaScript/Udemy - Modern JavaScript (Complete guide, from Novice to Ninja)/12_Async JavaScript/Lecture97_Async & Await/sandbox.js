const getTodos = async () => {
  const response = await fetch('todos/luigi.json');
  const data = await response.json();
  
  return 'hi';
};

console.log(1);
console.log(2);

getTodos()
  .then(data => console.log('Promise resolved:',data));

console.log(3);
console.log(4);