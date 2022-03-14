//-------------------------------------------------------------------------------------
// Lecture 54. Creating & Removing Elements
console.log('Lecture 54. Creating & Removing Elements');

const ul = document.querySelector('ul');

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  //ul.innerHTML += '<li>Something new</li>';
  const li = document.createElement('li');
  li.textContent = 'Something new';

  //ul.append(li);
  ul.prepend(li);
});

const items = document.querySelectorAll('li');
items.forEach(item => {
  item.addEventListener('mouseover', e => {
    e.target.style.cursor = 'pointer';
  });

  item.addEventListener('click', e => {    
    e.target.remove();
  });  
});

