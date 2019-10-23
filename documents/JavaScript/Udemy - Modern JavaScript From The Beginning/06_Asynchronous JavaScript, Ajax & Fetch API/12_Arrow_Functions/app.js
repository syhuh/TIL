// Normal function
const sayHello1= function() {
  console.log('Hello1');
}
sayHello1();

// Basic Arrow Function
const sayHello2 = () => {
  console.log('Hello2');
}
sayHello2();

// One line functon does not need braces
const sayHello3 = () => console.log('Hello3');
sayHello3();

// One line returns
const sayHello4 = () => 'Hello4';
console.log(sayHello4());

// Same as abobe
const sayHello5 = function() {
  return 'Hello5';
}
console.log(sayHello5());

// // Return object
// const sayHello6 = () => ({ msg: 'Hello6' });
// console.log(sayHello6());

// // Single param does not need parenthesis
// const sayHello7 = name => console.log(`Hello7 ${name}`);
// sayHello7('Brad');

// // Multiple param need parenthesis
// const sayHello8 = (firstName, lastName) => console.log(`Hello8 ${firstName} ${lastName}`);
// sayHello8('Brad', 'Traversy');

// const users = ['Nathen', 'John', 'Willian'];

// const nameLengths1 = users.map(function(name) {
//   return name.length;
// });
// console.log(nameLengths1);

// // Shorter
// const nameLengths2 = users.map(name => {
//   return name.length;
// });
// console.log(nameLengths2);

// // Shortest
// const nameLengths3 = users.map(name => name.length);
// console.log(nameLengths3);