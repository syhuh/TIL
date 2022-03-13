//-------------------------------------------------------------------------------------
// Lecture 30. Function Declarations & Expressions
{
  console.log("Lecture 30. Function Declarations & Expressions"); 

  // function declaration
  function greet(){
    console.log('hello there');
  }

  // function expression
  const speak = function(){
    console.log('good day!');
  };

  greet();
  greet();

  speak();
}

//-------------------------------------------------------------------------------------
// Lecture 31. Arguments & Parameters
{
  console.log("Lecture 31. Arguments & Parameters"); 

  const speak = function(name = 'luigi', time = 'night'){
    console.log(`good ${time}, ${name}!`);
  };
  
  speak('mario', 'morning');
  speak();
  speak('shaun');
}

//-------------------------------------------------------------------------------------
// Lecture 32. Returning Values
{
  console.log("Lecture 32. Returning Values");  

  const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
  }

  const area = calcArea(5);
  console.log('area is:', area);
}

//-------------------------------------------------------------------------------------
// Lecture 33. Arrow Functions
{
  console.log("Lecture 33. Arrow Functions"); 

  // regular function
  // const calcArea = function(radius){
  //   return 3.14 * radius**2;
  // }

  // arrow function
  const calcArea = radius => 3.14 * radius**2;

  const area = calcArea(5);
  console.log('area is:', area);

  // practise arrow functions

  // const greet = function(){
  //   return 'hello, world';
  // }

  const greet = () => 'hello, world';

  // const bill = function(products, tax){
  //   let total = 0;
  //   for(let i = 0; i < products.length; i++){
  //     total += products[i] + products[i] * tax;
  //   }
  //   return total;
  // }

  const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
      total += products[i]  + products[i] * tax;
    }
    return total;
  }

  console.log(greet());
  console.log(bill([10,15,30], 0.2));
}

//-------------------------------------------------------------------------------------
// Lecture 34. Functions vs Methods
{
  console.log("Lecture 34. Functions vs Methods"); 

  const name = 'shaun';

  // function

  const greet = () => {
    return 'hello';
  };

  let resultOne = greet();
  console.log(resultOne);

  // method

  let resultTwo = name.toUpperCase();
  console.log(resultTwo);
}
//-------------------------------------------------------------------------------------
// Lecture 35. Foreach Method & Callbacks
{
  console.log("Lecture 35. Foreach Method & Callbacks"); 

  let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

  const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
  }

  // people.forEach(person => {
  //   console.log(`hello ${person}`);
  // });

  people.forEach(logPerson);

}

//-------------------------------------------------------------------------------------
// Lecture 36. Callback Functions in Action
{
  console.log("Lecture 36. Callback Functions in Action"); 

  const ul = document.querySelector('.people');

  const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

  let html = ``;

  people.forEach(person => {
    // create html template for each person
    html += `<li style="color: purple">${person}</li>`;
  });

  console.log(html);
  ul.innerHTML = html;

}
