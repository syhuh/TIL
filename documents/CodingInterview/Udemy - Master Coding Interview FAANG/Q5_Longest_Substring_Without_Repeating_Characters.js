// Ref:
// 1. https://leetcode.com/problems/longest-substring-without-repeating-characters/

/*
Level: Medium

Subject: Longest Substring Without Repeating Characters

Description: 
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
*/

/* Ground Rules
Step 1. Verify the constraints
  Q1. Is the substring contiguous?
    -> Yes, look for a substring not a subsequence.
       ex. For "abcbbd", substring is "abc" but subsequence is "abcd".
  
  Q2. Does case sensitivity matter?
    -> No, assume all characters in the string are lowercase.  

Step 2. Write out some test cases
  TC1. "abccabb" -> "abc" or "cab", 3
  TC2. "cccccc" -> "c", 1
  TC3. "" -> 0
  TC4. "abcbda" -> "abc" or "cbda", 4
  
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

    1st Hint: Use a sliding window to represent the current substirng.
    2nd Hint: The size of the window will change based on new characters, and characters we've already seen before.
    3rd Hint: Our seen characters hashmap keeps track of what characters we've seen, and the  index we saw them at.
  
  2. Do Step 6 & Step 7 again.
*/

// ----------------------------------------------------------------------------------------------
// Solution 1 : Brute force
// const lengthOfLongestSubstring = function(s){
//   if(s.length <= 1)
//     return s.length;

//   let longest = 0;

//   for(let left = 0; left < s.length; left++){
//     let seenChars = {}, currentLength = 0;
    
//     for(let right = left; right < s.length; right++){
//       const currChar = s[right];

//       if(!seenChars[currChar]){
//         currentLength++;
//         seenChars[currChar] = true;
//         longest = Math.max(longest, currentLength);
//       }
//       else {
//         break;
//       }
//     }
//   }
  
//   return longest;
// }

// ----------------------------------------------------------------------------------------------
// Solution 2 : Sliding Window
const lengthOfLongestSubstring = function(s){
  if(s.length <= 1) return s.length;

  const seenChars = {};
  let left = 0, longest = 0;

  for(let right = 0; right < s.length; right++){
    const currentChar = s[right];
    const prevSeenChar = seenChars[currentChar];

    if(prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    
    longest = Math.max(longest, right - left + 1);      
    
    seenChars[currentChar] = right;      
  }

  return longest;  
}

// ----------------------------------------------------------------------------------------------
// Test Drive
const setTCs = [
  {
    'in': "abccabb",
    'out': 3
  },
  {
    'in': "cccccc",
    'out': 1
  },
  {
    'in': "",
    'out': 0
  },
  {
    'in': "abcbda",
    'out': 4
  }
];

for(let i in setTCs){
  let actualOut = lengthOfLongestSubstring(setTCs[i]['in']);
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
1. Solution 1. Brute force
  Time Complexity: O(N^2)
  Space Complexity: O(N)
2. Solution 2. Sliding Window
  Time Complexity: O(N)
  Space Complexity: O(N)
*/