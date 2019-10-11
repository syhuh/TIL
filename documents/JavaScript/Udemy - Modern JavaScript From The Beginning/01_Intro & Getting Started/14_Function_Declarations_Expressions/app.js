// FUNCTION DECLARATIONS
function greet(firstName = 'John', lastName = 'Doe') {
  return `Hello ${firstName} ${lastName}`;
}

console.log(greet());
console.log(greet('Steve', 'Jobs'));

// FUNCTION EXPRESSIONS
const square = function(x = 3){
  return x*x;
}
console.log(square(8));

// IIFEs - IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS
(function(name){
  console.log(`Goodbye ${name}`);
})('Brad');