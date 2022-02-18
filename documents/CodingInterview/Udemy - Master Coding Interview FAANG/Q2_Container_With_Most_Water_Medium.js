// Ref:
// 1. https://leetcode.com/problems/container-with-most-water/

/*
Level: Medium
Subject: Container With Most Water
Description: 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
*/

/* Ground Rules
Step 1. Verify the constraints
  Q1. Does the thickness of line affect the area? (Do you need this question???)
    -> No, assume they take up no space.
  Q2. Do the left and right sides of the graph count as walls? (Do you need this question???)
    -> No, the sides can not be to form a container. 
  Q3. Does a higher line inside container affect our area?
    -> No, lines inside a container don't affect the area.
  

Step 2. Write out some test cases
  TC1. [1, 2, 6, 3, 7, 8]
  TC2. [1]
  TC3. [1, 2]
  
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
// const findMostWaterFill = function(arr){
//   const length = arr.length;
//   let maxFill = 0;

//   for(let p1 = 0; p1 < length; p1++){
//     for(let p2 = p1 + 1; p2 < length; p2++){
//       const height = Math.min(arr[p1], arr[p2]);
//       const width = p2 - p1;
//       const currFill = width * height;
//       maxFill = Math.max(currFill, maxFill);
//     }
//   }

//   return maxFill;  
// }

// ----------------------------------------------------------------------------------------------
// Solution 2 : Improve! Use 'shifting pointers'
const findMostWaterFill = function(arr){
  const length = arr.length;
  let maxFill = 0;

  let left = 0;
  let right = length - 1;

  while (left < right){
    const width = right - left;
    const height = Math.min(arr[left], arr[right]);
    const currFill = width * height;

    maxFill = Math.max(currFill, maxFill);    

    if(arr[left] < arr[right]){
      left++;
    }
    else{
      right--;
    }
  }

  return maxFill;  
};

// ----------------------------------------------------------------------------------------------
// Test Drive
const heights = [4, 8, 1, 2, 3, 9];
// const heights = [1,8,6,2,5,4,8,3,7];
// const heights = [1];
//const heights = [1, 1];
console.log(findMostWaterFill(heights));

/*
Review:
1. Solution 1. Brute force
  Time Complexity: O(N^2)
  Space Complexity: O(1)
2. Solution 2. Improve! Use 'shifting pointers'
  Time Complexity: O(N)
  Space Complexity: O(1)
*/