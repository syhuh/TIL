//-------------------------------------------------------------------------------------
// Lecture 49. Getting & Setting Attributes
console.log('Lecture 49. Getting&. Setting Attributes');

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.innerText = 'Success message';
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color:green;');