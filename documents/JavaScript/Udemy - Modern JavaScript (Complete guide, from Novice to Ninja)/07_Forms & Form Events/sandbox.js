//-------------------------------------------------------------------------------------
// Lecture 59. Submit Events
{
  console.log('Lecture 59. Submit Events');

  const form = document.querySelector('.signup-form');

  form.addEventListener('submit', e => {
    e.preventDefault();

    //const username = document.querySelector('#username');
    //console.log(username.value);

    console.log(form.username.value);
  });  
}

//-------------------------------------------------------------------------------------
// Lecture 60. Testing RegEx Patterns
{
  console.log('Lecture 60. Testing RegEx Patterns');

  const pattern = /[a-z]{6,}/;
  const username = '123kaizen';

  const result = pattern.test(username);

  if(result){
    console.log('regex test passed');
  }
  else{
    console.log('regex test failed');
  }

  const index = username.search(pattern);
  console.log(index);

}

//-------------------------------------------------------------------------------------
// Lecture 62. Basic Form Validation + Lecture 63. Keyboard Events
{
  console.log('Lecture 62. Basic Form Validation + Lecture 63. Keyboard Events');

  const form = document.querySelector('.signup-form');
  const feedback = document.querySelector('.feedback');
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  form.addEventListener('submit', e => {
    e.preventDefault();

    //validation
    const username = form.username.value;
    
    
    if(usernamePattern.test(username)){
      feedback.textContent = 'that username is valid!';
    }
    else {
      feedback.textContent = 'username must contain letters only & \
      be between 6 & 12 characters long';
    }
  }); 

  form.username.addEventListener('keyup', e => {
    console.log(e.target.value, form.username.value);

    if(usernamePattern.test(e.target.value)){
      form.username.setAttribute('class', 'success');

    }
    else{
      form.username.setAttribute('class', 'error');
    }
  });
}