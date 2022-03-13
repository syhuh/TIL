//-------------------------------------------------------------------------------------
// Lecture 5. Adding JavaScript to a Web Page
{
  //alert("Hello, world");
}


//-------------------------------------------------------------------------------------
// Lecture 6. The Browser Console
{
  console.log("Lecture 6. The Browser Console");
  console.log(1);
  console.log(2);
}


//-------------------------------------------------------------------------------------
// Lecture 7. Variables, Constants & Comments
{
  console.log("Lecture 7. Variables, Constants & Comments");
  let age = 25;
  let year = 2019;

  console.log(age, year);

  age = 30;
  console.log(age);

  const points = 150;
  // points = 50;
  console.log(points);

  var score = 75;
  console.log(score);
}


//-------------------------------------------------------------------------------------
// Lecture 9. Strings
{
  console.log("Lecture 9. Strings");
  console.log('hello, world');

  let email = 'mario@thenetninja.co.uk';
  console.log(email);

  // string concatenation
  let firstName = 'Brandon';
  let lastName = 'Sanderson';

  let fullName = firstName + ' ' + lastName;

  console.log(fullName);

  // getting individual characters
  console.log(fullName[2]);

  // string length
  console.log(fullName.length);

  // string methods
  console.log(fullName.toUpperCase());
  let result = fullName.toLocaleLowerCase();
  console.log(result);

  let index = email.indexOf('@');
  console.log('index of the @ sign:', index);
}

//-------------------------------------------------------------------------------------
// Lecture 10. Common String Methods
{  
  console.log("Lecture 10. Common String Methods");

  let email = 'mario@thenetninja.co.uk';

  let result = email.lastIndexOf('n');
  console.log(result);


  result = email.slice(0,5);
  console.log(result);

  result = email.substr(5,12);
  console.log(result);

  result = email.replace('m', 'w');
  console.log(result);

  result = email.replace('n', 'w');
  console.log(result);
}


//-------------------------------------------------------------------------------------
// Lecture 11. Numbers
{
  console.log("Lecture 11. Numbers");

  let radius = 10;
  let pi = 3.14;

  console.log(radius, pi);

  // math operators - +, -, *, /, **, %
  console.log(10 / 2);

  let result = radius % 3;
  console.log(result);

  result = pi * radius**2;
  console.log(result);

  // order of operation - B I D M A S
  result = 5 * (10 - 3)**2;
  console.log(result);

  // shorthands
  let likes = 10;
  console.log(likes);

  likes = likes + 1;
  console.log(likes);

  likes++;
  console.log(likes);

  likes = likes + 10;
  console.log(likes);

  likes += 10;
  console.log(likes);

  likes *= 2;
  console.log(likes);

  likes /= 2;
  console.log(likes);

  // NaN - not a number
  console.log(5 / 'hello');
  console.log(5 * 'hello');

  result = 'the blog has ' + likes + ' likes.';
  console.log(result);
}


//-------------------------------------------------------------------------------------
// Lecture 12. Template Strings
{
  console.log("Lecture 12. Template Strings");

  const title = 'Best reads of 2019';
  const author = 'Mario';
  let likes = 30;

  // concatenation way
  let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
  console.log(result);

  // template string way
  result = `The blog called ${title} by ${author} has ${likes} likes`;
  console.log(result);

  // creating html templates
  let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
  `;

  console.log(html);
}

//-------------------------------------------------------------------------------------
// Lecture 13. Arrays
{
  console.log("Lecture 13. Arrays");

  let ninjas = ['shaun', 'ryu', 'chun-li'];

  ninjas[1] = 'ken';
  console.log(ninjas[1]);

  let ages = [20, 25, 30, 35];
  console.log(ages[2]);

  let random = ['shaun', 'crystal', 30, 20];

  // array length
  console.log(ninjas.length);

  // array methods
  let result = ninjas.join(',');
  console.log(result);

  result = ninjas.indexOf('chun-li');
  console.log(result);

  result = ninjas.concat(['ken', 'crystal']);
  console.log(result);

  result = ninjas.push('ken');
  console.log(result);

  result = ninjas.pop();
  console.log(result);
  console.log(ninjas);
}


//-------------------------------------------------------------------------------------
// Lecture 14. Null & Undefined
console.log("Lecture 14. Null & Undefined");
{
  let age;
  console.log(age, age + 3, `the age is ${age}`);
}

{
  let age = null;
  console.log(age, age + 3, `the age is ${age}`);
}

//-------------------------------------------------------------------------------------
// Lecture 15. Boolean & Comparisons
{
  console.log("Lecture 15. Boolean & Comparisons");
  console.log(true, false, 'true', 'false');

  // methods can return booleans
  let email = 'luigi@thenetninja.co.uk';
  let names = ['mario', 'luigi', 'toad'];

  let result = email.includes('@');
  console.log(result);

  result = names.includes('luigi');
  console.log(result);

  // comparison operators
  let age = 25;

  console.log(age == 25);
  console.log(age == 30);
  console.log(age != 30);
  console.log(age > 20);
  console.log(age < 20);
  console.log(age <= 25);
  console.log(age >= 25);

  let name = 'shaun';

  console.log(name == 'shaun');
  console.log(name == 'Shaun');
  console.log(name > 'crystal');
  console.log(name > 'Shaun');
  console.log(name > 'Crystal'); 
}

//-------------------------------------------------------------------------------------
// Lecture 16. Loose vs Strict Comparison
{
  console.log("Lecture 16. Loose vs Strict Comparison");
  let age = 25;

  //loose comparison (different types can still be equal)

  console.log(age == 25);
  console.log(age == '25');
  console.log(age != 25);
  console.log(age != '25');

  //strict comparison (different types cannot be equal)

  console.log(age === 25);
  console.log(age === '25');
  console.log(age !== 25);
  console.log(age !== '25');
}

//-------------------------------------------------------------------------------------
// Lecture 17. Type Conversion
{
  console.log("Lecture 17. Type Conversion");

  let score = '100';

  score = Number(score);
  console.log(score + 1);
  console.log(typeof score);

  let result = Number('hello');
  console.log(result, typeof result);

  result = String(50);
  console.log(result, typeof result);

  result = Boolean(100);
  console.log(result, typeof result);

  result = Boolean(0);
  console.log(result, typeof result);

  result = Boolean(-1);
  console.log(result, typeof result);

  result = Boolean('0');
  console.log(result, typeof result);

  result = Boolean('');
  console.log(result, typeof result);
}
