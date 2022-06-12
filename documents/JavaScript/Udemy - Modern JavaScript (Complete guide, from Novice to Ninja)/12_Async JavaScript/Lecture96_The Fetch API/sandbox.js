fetch('todos/luigi.json').then(response => {
  console.log('promise resolved:', response);
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log('promise rejected:', err);
});