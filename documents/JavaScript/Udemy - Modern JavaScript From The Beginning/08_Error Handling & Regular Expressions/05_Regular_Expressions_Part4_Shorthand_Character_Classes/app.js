let re;

// Shorthand Character Classes
re = /\w/;              // Word character - alphanumeric or _
re = /\w+/;             // + = one or more
re = /\W/;              // Non-Word character
re = /\d/;              // Match any digit
re = /\d+/;             // + = one or more
re = /\D/;              // Match any Non-digit
re = /\s/;              // Match whitespace
re = /\S/;              // Match Non-whitespace
re = /Hell\b/i;         // Word boundary

// Assertions
re = /x(?=y)/;          // Match x only if followed by y
re = /x(?!y)/;          // Match x only if NOT followed by y

// String to match
const str = 'Sexa';    

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