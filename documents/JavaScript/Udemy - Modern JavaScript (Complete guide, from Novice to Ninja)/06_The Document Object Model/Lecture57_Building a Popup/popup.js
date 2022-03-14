//-------------------------------------------------------------------------------------
// Lecture 57. Building a Popup
console.log('Lecture 57. Building a Popup');

const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {  
  popup.style.display = "block";
});

const close = document.querySelector('.popup-close');
close.addEventListener('click', () => {  
  popup.style.display = "none";
});

popup.addEventListener('click', e => {  
  console.log(e);
  if(!(e.target.parentElement.className === 'popup-content' || e.target.className === 'popup-content' || e.target.className === 'popup'))
    popup.style.display = "none";  
});