//-------------------------------------------------------------------------------------
// Lecture 55. Event Bubbling (and delegation)
console.log('Lecture 55. Event Bubbling (and delegation)');

const ul = document.querySelector('ul');

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  //ul.innerHTML += '<li>Something new</li>';
  const li = document.createElement('li');
  li.textContent = 'Something new';

  //ul.append(li);
  ul.prepend(li);
});

// 새로 생성되는 자식 엘리먼트가 있을 수도 있으므로,
// 자식 엘리먼트에 대한 이벤트 핸들러는 부모 엘리먼트에서 하는게 바람직하다.
// const items = document.querySelectorAll('li');
// items.forEach(item => {
//   item.addEventListener('mouseover', e => {
//     e.target.style.cursor = 'pointer';
//     e.stopPropagation();
//   });

//   item.addEventListener('click', e => {   
//     console.log('event in LI'); 
//     e.stopPropagation();
//     e.target.remove();
//   });  
// });

ul.addEventListener('mouseover', e => {
  console.log('event in UL');
  console.log(e.target);

  if(e.target.tagName === 'LI'){
    e.target.style.cursor = 'pointer';
  }
  
  e.stopPropagation();
});

ul.addEventListener('click', e => {
  console.log('event in UL');
  console.log(e.target);

  if(e.target.tagName === 'LI'){
    e.target.remove();
  }  

  e.stopPropagation();
});