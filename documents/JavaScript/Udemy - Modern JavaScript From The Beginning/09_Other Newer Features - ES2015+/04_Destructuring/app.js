// Destructuring Assignment
let a, b;
[a, b] = [100, 200];
console.log(a, b);

// Rest pattern
[m, n, ...rest] = [700, 800, 300, 400, 500];
console.log(m);
console.log(n);
console.log(rest);

({o, p, ...rest} = {o: 1000, p: 2000, c: 300, d: 400, e: 500 });
console.log(o, p);
console.log(rest);

// Array Destructuring
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);

// Parser array returned from function
function getPeople() {
  return ['Billy', 'Jim', 'Marry'];
}
let person4, person5, person6;
[person4, person5, person6] = getPeople();
console.log(person4, person5, person6);

// Object Destructuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function() {
    console.log('Hello');
  }
};

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6 Destructuring
const { name, age, city, sayHello } = person;
console.log(name, age, city);
sayHello();