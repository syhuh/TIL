let re;

// Brackets [] - Character Sets
re = /gr[ae]/i;               // Must be an a or e
re = /[GF]ray/i;              // Must be a G or F
re = /[^GF]ray/i;             // Match anything except a G or F
re = /[A-Z]ray/;              // Match any uppercase letter
re = /[a-z]ray/;              // Match any lowercase letter
re = /[A-Za-z]ray/;           // Match any letter
re = /[0-9][0-9]ray/;         // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;              // Must occur exactly {m} amount of times 
re = /Hel{2,4}o/i;            // Must occur between {m, n} amount of times
re = /Hel{2,}o/i;             // Must occur at least {m} times

// Parentheses () - Grouping
re = /([0-9]x){3}/;

// String to match
const str = 'abc 3x4x5x6x World';    

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);