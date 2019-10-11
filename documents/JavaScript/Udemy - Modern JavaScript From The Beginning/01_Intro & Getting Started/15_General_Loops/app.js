// FOR 
for (let i = 0; i < 10; i++) {
  
  if(i === 2){
    console.log('2 is my favorite number. Skip the following block.');
    continue;    
  }

  if(i === 5){
    console.log('Stop the loop');
    break;
  }

  console.log(`Number ${i}`);
}

// WHILE 
let i = 0;

while(i < 5){
  console.log(`Number ${i}`);
  i++;
}

// DO WHILE 
i = 0;

do {
  console.log(`Number ${i}`);
  i++;
} while (i < 5);

// FOREACH 
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
cars.forEach(function(car, index, array){
  console.log(`${index} :${car}`);
  console.log(array);
});

// MAP
const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'},
  {id: 4, name: 'Steve'}
];

const ids = users.map(function(user){
  return `User ID: ${user.id}`;
});

console.log(ids);

// FOR IN
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}