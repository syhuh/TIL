//-------------------------------------------------------------------------------------
// Lecture 56. More DOM Events
console.log('Lecture 56. More DOM Events');

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  console.log('OI, my content is copyrighted');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  e.target.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
  console.log(e.pageX, e.pageY);
});
