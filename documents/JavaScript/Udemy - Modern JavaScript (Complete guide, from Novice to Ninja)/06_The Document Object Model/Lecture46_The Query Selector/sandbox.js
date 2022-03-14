//-------------------------------------------------------------------------------------
// Lecture 46. The Query Selector
console.log('Lecture 46. The Query Selector');

let para = document.querySelector('p');
console.log(para);

para = document.querySelector('.error');
console.log(para);

para = document.querySelector('div.error');
console.log(para);

let paras = document.querySelectorAll('p');
paras.forEach(para => {
  console.log(para);
});

paras = document.querySelectorAll('.error');
console.log(paras);
