const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
let val;
// Concatenation
val = 'Hello, my name is ' + firstName + ' ' + lastName + ' and I am ' + age;
// Append
val = 'Brad ';
val += 'Traversy';
// Escaping
val = 'That\'s awesome, I can\'t wait';
// Length
val = firstName.length;
// concat()
val = firstName.concat(' ', lastName);
// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();
// Indexed access
val = firstName[2];
// infexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
// charAt()
val = firstName.charAt(2);
// Get last char
val = firstName.charAt(firstName.length - 1);
// substring()
val = firstName.substring(0, 4);
// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);
// split()
const str = 'Hello there my name is Brad';
val = str.split(' ');
const tags = 'web design, web development, programming';
val = tags.split(',');
trimmed = val.map(i => i.trim());
// replace()
val = str.replace('Brad', 'Jack');
// include()
val = str.includes('name');
console.log(val);
