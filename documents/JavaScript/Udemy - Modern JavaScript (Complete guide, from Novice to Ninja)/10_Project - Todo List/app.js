const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();

  const todo = addForm.add.value.trim(); // trim(): 앞 뒤 공백 제거

  if(todo.length){ // 공백 입력 후 엔터 시에는 todo에 추가 안되게.
    generateTemplate(todo);
    //addForm.add.value = ''; // My code
    addForm.reset(); // Shaun's Code. 엔터 후 이전 글자가 남아있지 않게.
  }  
});

// delete todos using event delegation
list.addEventListener('click', e => {
  e.stopPropagation();
  console.log(e.target);
  console.log(e);
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove(); // DOM traversing
  }
});

const filterTodos = (term) => {
  //console.log(term);
  //console.log(list.children);

  // My first version
  /*
  const filteredOutTodos = Array.from(list.children).filter(todo => !todo.textContent.includes(term));
  const filteredInTodos = Array.from(list.children).filter(todo => todo.textContent.includes(term));
  console.log(filteredOutTodos);
  console.log(filteredInTodos);
  filteredOutTodos.forEach(todo => todo.classList.add('d-none'));  
  filteredInTodos.forEach(todo => todo.classList.remove('d-none'));
  */

  // Chaining methods version
  // filteredInTodos
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term)) // make case insensitive
    .forEach(todo => todo.classList.add('d-none')); 

  // filteredOutTodos
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term)) // make case insensitive
    .forEach(todo => todo.classList.remove('d-none'));
};

// keyup event
search.addEventListener('keyup', e => {
  const term = search.value.trim().toLowerCase(); // make case insensitive
  filterTodos(term);
});
