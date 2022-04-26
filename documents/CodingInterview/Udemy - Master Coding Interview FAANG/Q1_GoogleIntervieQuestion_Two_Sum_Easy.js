// Ref:
// 1. https://leetcode.com/problems/two-sum/

/*
Level: Easy

Subject: Two Sums

Description: 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

/* Ground Rules
Step 1. Verify the constraints
  Q1. Are the numbers positive or can there be negatives?
    -> All numbers are positive.
  Q2. Are there duplicate numbers?
    -> No, thre are no duplicate numbers .
  Q3. Will there always be a solution available?
    -> No, there may not always be a solution.
    [1, 3, 7, 9, 2] 25, [], [5]
  Q4. What do we return if there's no solution?
    -> Just return null.
  Q5. Can there be a multiple pairs that adds up to the target?
    -> No, only 1 pair of numbers will add up to the target.
    [1, 3, 7, 9, 2] 11 : O, [1, 3, 7, 9, 2, 4] 11 : X

Step 2. Write out some test cases
  TC1. [1, 3, 7, 9, 2] t = 11, [3, 4]
  TC2. [1, 3, 7, 9, 2] t = 25, null
  TC3. [] t = 1, null
  TC4. [5] t = 5, null
  TC5. [1, 6] t = 7, [0, 1]
  
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
// Solution 1 : Brute force
// const twoSum = function(nums, target) {
//   const length = nums.length;
//   for(let p1 = 0; p1 < length; p1++){
//     for(let p2 = p1 + 1; p2 < length; p2++) {
//       const numToFind = target - nums[p1];
//       if(nums[p2] === numToFind){
//         return [p1, p2];
//       }
//     }
//   }  

//   return null;
// };

// ----------------------------------------------------------------------------------------------
// Solution 2 : Use complement number and hash table
const twoSum = function(nums, target) {
  // You can use just object for hash table i.e. map, 
  // but if you use Map, you can transcribe it to other programming language easily.    
  const numToFindMap = new Map(); 

  for(let p in nums){    
    if(numToFindMap.has(nums[p])){
      return [numToFindMap.get(nums[p]), p];
    }    
    const numToFind = target - nums[p];  
    numToFindMap.set(numToFind, p);    
  }

  return null;
};

// ----------------------------------------------------------------------------------------------
// Test Drive

const nums = [2,7,11,15];
const target = 9;
// const nums = [3,2,4];
// const target = 6;
// const nums = [3,3];
// const target = 6;
console.log(twoSum(nums, target));

/*
Review:
1. Solution 1. Brute force
  Time Complexity: O(N^2)
  Space Complexity: O(1)
2. Solution 2. Improve! Use coplement number and hash table: 
  Time Complexity: O(N)
  Space Complexity: O(N)
*/