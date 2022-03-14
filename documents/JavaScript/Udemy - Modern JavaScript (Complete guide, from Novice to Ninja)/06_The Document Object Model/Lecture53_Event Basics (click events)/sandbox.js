//-------------------------------------------------------------------------------------
// Lecture 53. Event Basics (click events)
console.log('Lecture 53. Event Basics (click events)');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  console.log("you clicked me");
});

const items = document.querySelectorAll('li');
items.forEach(item => {
  item.addEventListener('mouseover', e => {
    e.target.style.cursor = 'pointer';
    console.log(e);
    console.log(e.target);
  });

  item.addEventListener('click', e => {
    console.log(`you clicked ${item.innerText}`);
    console.log(e);
    console.log(e.target);
    console.log(item);

    e.target.style.textDecoration = 'line-through';
  });  
});