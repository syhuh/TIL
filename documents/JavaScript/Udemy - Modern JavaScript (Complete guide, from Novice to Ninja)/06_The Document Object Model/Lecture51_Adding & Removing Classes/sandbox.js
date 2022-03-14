//-------------------------------------------------------------------------------------
// Lecture 51. Adding & Removing Classes
console.log('Lecture 51. Adding & Removing Classes');

const error = document.querySelector('.error');
console.log(error.classList);

error.classList.remove('error');
error.classList.add('success');
error.innerText = 'Changed to success msg';

const paras = document.querySelectorAll('p');
paras.forEach(para => {
  if(para.textContent.includes('success')){
    para.classList.add('success');
  }
  else if(para.textContent.includes('error')){
    para.classList.add('error');
  }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');