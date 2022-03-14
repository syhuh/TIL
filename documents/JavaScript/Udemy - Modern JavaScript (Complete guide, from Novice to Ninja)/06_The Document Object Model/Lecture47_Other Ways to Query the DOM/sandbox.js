//-------------------------------------------------------------------------------------
// Lecture 47. Other Ways to Query the DOM
console.log('Lecture 47. Other Ways to Query the DOM');

// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);

// Following forEach not works!!!
// errors.forEach(error => {
//   console.log(error);
// });

// get elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);
