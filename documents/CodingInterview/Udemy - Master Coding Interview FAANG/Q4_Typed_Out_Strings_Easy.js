// Ref:
// 1. https://leetcode.com/problems/backspace-string-compare/

/*
Level: Easy
Subject: Backspace String Compare
Description: 
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
*/

/* Ground Rules
Step 1. Verify the constraints
  Q1. What happens two #'s appear beside each other?
    -> Delete the two values before the first #.
  
  Q2. What happes to # when there is no character to remove?
    -> It deletes nothing then, just like backspace would.
  
  Q3. Are two empty strings equal to each other?
    -> Yes, consider two empty strings as equal.
  
  Q3. Dose case sensitivity matter? 
    -> Yes it does, "a" does not equal "A".
  

Step 2. Write out some test cases
  TC1. bla
  
Step 3. Figure out a solution without code
  1. Come up with a working logical solution. (Don't think not event about code implementation)
  2. Use white board to write down the best case test case we come up with.
     Not optimal solution, just working solution!
  3. Think out loudly your logical procedure.
  4. Define some variable and take the logical procedure.

Step 4. Write out our solution in code
  1. Convert the logical solution of Step 3 to code.
  2. Write the code on white board.

Step 5. Double check for errors
  1. Check typo, the consistency of variable names, whether or not all cases are correct, closing the loop etc.
  2. Do it without IDE.

Step 6. Test our code with our test cases
  1. Go through your code line by line with each test cases.
  2. Write down the update value of variables on the right side of a code.

Step 7. Analyze Space & Time Complexity
  1. O(N^2), O(2^N), O(N!) should be optimezed.

Step 8. Can we optimize our solution?
  1. Compare Time Complexity & Space Complexity. 
    If one of them is drastically better than the other, it's a sign that it could be optimized.
    You can consume more resources in the one that's much better in order to bring down the other complexity.
  
  2. Do Step 6 & Step 7 again.
*/

// ----------------------------------------------------------------------------------------------
// Solution 1 : Using stack
// const backspaceCompare = function(S, T){
//   const stackS = [], stackT = [];

//   for(let i in S){
//     if(S[i] === '#'){
//       stackS.pop();
//     }
//     else{
//       stackS.push(S[i]);
//     }
//   }

//   for(let i in T){
//     if(T[i] === '#'){
//       stackT.pop();
//     }
//     else{
//       stackT.push(T[i]);
//     }
//   }

//   //console.log('stackS: ', stackS.toString(), 'stackT: ', stackT.toString());

//   return stackS.toString() === stackT.toString();
// }

// ----------------------------------------------------------------------------------------------
// Solution 2 : Using two pointer to bring down space complexity
const backspaceCompare = function (S, T){
  let p1 = S.length - 1, p2 = T.length - 1;

  while(p1 >= 0 || p2 >= 0){
    if(S[p1] === '#' || T[p2] === '#'){
      if(S[p1] === '#'){
        let backCount = 2;

        while(backCount > 0){
          backCount--;
          p1--;

          if(S[p1] === '#'){
            backCount += 2;
          }
        }
      }
      if(T[p2] === '#'){
        let backCount = 2;

        while(backCount > 0){
          backCount--;
          p2--;

          if(T[p2] === '#'){
            backCount += 2;
          }
        }
      }
    }  
    else{ 
      //console.log(S[p1], T[p2]);
      if(S[p1] !== T[p2]){
        return false;
      }
      p1--;
      p2--;  
    }
  }

  return true;
}

// ----------------------------------------------------------------------------------------------
// Test Drive
const setTCs = [
  {
    'in': {
      'S': "ab#z",
      'T': "az#z"
    },
    'out': true
  },
  {
    'in': {
      'S': "abc#d",
      'T': "acc#d"
    },
    'out': false
  },
  {
    'in': {
      'S': "x#y#z#",
      'T': "a#"
    },
    'out': true
  },
  {
    'in': {
      'S': "a###b",
      'T': "b"
    },
    'out': true
  },
  {
    'in': {
      'S': "Ab#z",
      'T': "ab#z"
    },
    'out': false
  },
  {
    'in': {
      'S': "bbbextm",
      'T': "bbb#extm"
    },
    'out': false
  }
];

for(let i in setTCs){
  let actualOut = backspaceCompare(setTCs[i]['in']['S'], setTCs[i]['in']['T']);
  let expectedOut = setTCs[i]['out'];
  if(actualOut === expectedOut){
    console.log(`Test Case ${i} : Passed!`);
  }
  else {
    console.log(`Test Case ${i} : Failed (Expected: ${expectedOut}, Actual: ${actualOut})`);
  }
}

/*
Review:
1. Solution 1. Using stack
  Time Complexity: O(M + N)
  Space Complexity: O(M + N)
2. Solution 2. Improve! Using two pointer to bring down space complexity
  Time Complexity: O(M + N)
  Space Complexity: O(1)
*/