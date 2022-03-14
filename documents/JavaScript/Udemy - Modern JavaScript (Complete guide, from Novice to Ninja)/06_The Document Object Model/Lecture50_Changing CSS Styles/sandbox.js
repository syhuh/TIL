//-------------------------------------------------------------------------------------
// Lecture 50. Changing CSS Styles
console.log('Lecture 50. Changing CSS Styles');

const title = document.querySelector('h1');
// title.setAttribute('style', 'margin: 50px;');
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';