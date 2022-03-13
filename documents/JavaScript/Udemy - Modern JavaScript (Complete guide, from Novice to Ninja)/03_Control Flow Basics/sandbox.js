//-------------------------------------------------------------------------------------
// Lecture 19. For Loops
{
  console.log("Lecture 19. For Loops"); 

  const names = ['shaun', 'mario', 'luigi'];

  for(let i = 0; i < names.length; i++){
    let html = `<div>${names[i]}</div>`;
    console.log(html);
  }
}


//-------------------------------------------------------------------------------------
// Lecture 20. While Loops
{
  console.log("Lecture 20. While Loops");
  const names = ['shaun', 'mario', 'luigi'];
  let i = 0;

  while(i < 5){
    console.log('loop: ', i);
    i++;
  }

  while(i < names.length){
    console.log(names[i]);
    i++;
  }

  i = 8;
  while(i > 5){
    console.log('loop: ', i);
    i--;
  }
}


//-------------------------------------------------------------------------------------
// Lecture 21. Do While Loops
{
  console.log("Lecture 21. Do While Loops");
  let i = 5;

  do{
    console.log('val of i is: ', i);
    i++;
  } while(i < 5);
}


//-------------------------------------------------------------------------------------
// Lecture 22. If Statements
{
  console.log("Lecture 22. If Statements");
  const age = 25;

  if(age > 20){
    console.log('you are over 20 years old');
  }

  const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

  if(ninjas.length > 3){
    console.log("that's a lot of ninjas!");
  }

  const password = 'p@ssword';

  if(password.length >= 8){
    console.log('that password is long enough');
  }
}

//-------------------------------------------------------------------------------------
// Lecture 23. Else & Else If
{  
  console.log("Lecture 23. Else & Else If");

  const password = 'p@ssword123456';

  if(password.length >= 12){
    console.log('that password is mighty strong');
  } else if(password.length >= 8){
    console.log('that password is long enough');
  } else {
    console.log('password should be at least 8 characters long');
  }
}


//-------------------------------------------------------------------------------------
// Lecture 24. Logical Operators
{
  console.log("Lecture 24. Logical Operators");

  const password = 'p@ss12';

  if(password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
  } else if(password.length >= 8 || password.includes('@') && password.length > 5){
    console.log('that password is strong enough');
  } else {
    console.log('that password is not strong enough');
  }
}


//-------------------------------------------------------------------------------------
// Lecture 25. Logical NOT
{
  console.log("Lecture 25. Logical NOT");

  const user = false;

  if(!user){
    // do something
    console.log('you must be logged in to continue');
  }

  console.log(!true);
  console.log(!false);
}

//-------------------------------------------------------------------------------------
// Lecture 26. Break & Continue
{
  console.log("Lecture 26. Break & Continue");

  const scores = [50, 25, 0, 30, 100, 20, 10];

  for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
      continue;
    }

    console.log('your score:', scores[i]);

    if(scores[i] === 100){
      console.log('congrats, you got the top score!');
      break;
    }
  }
}


//-------------------------------------------------------------------------------------
// Lecture 27. Switch Statements
{
  console.log("Lecture 27. Switch Statements");

  const grade = 'D';

  switch(grade){
    case 'A':
      console.log('you got an A!');
      break;
    case 'B':
      console.log('you got a B!');
      break;
    case 'C':
      console.log('you got a C!');
      break;
    case 'D':
      console.log('you got a D!');
      break;
    case 'E':
      console.log('you got an E!');
      break;
    default:
      console.log('not a valid grade');
  }
}

//-------------------------------------------------------------------------------------
// Lecture 28. Variables & Block Scope
{
  console.log("Lecture 28. Variables & Block Scope");
  
  let age = 30;

  if(true){
    // age = 40;
    let age = 40;
    let name = 'shaun';
    console.log('inside 1st code block:', age, name);

    if(true){
      let age = 50;
      console.log('inside 2nd code block:', age, name);
    }
  }
  
  console.log('outside code block:', age, name);
}
