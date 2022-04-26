// Ref:
// 1. https://leetcode.com/problems/trapping-rain-water/

/*
Level:  Hard

Subject: Trapping rain water

Description: 
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
*/

/* Ground Rules
Step 1. Verify the constraints
  Q1. Do the left and rignt sides of graph count as a wall?
    -> No, the sides are not walls.
  Q2. Will there be negative intergers?
    -> No, assume all intergers are positive.

Step 2. Write out some test cases
  TC1. [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2] : 8
  TC2. [0] : 0
  TC3. [1] : 0
  TC4. [1, 2] : 0
  TC5. [0, 1, 2]: 0
  TC6. [1, 0, 2]: 1
  
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
// const getTrappedRainwater = function(walls){
//   let totalWater = 0;
//   const length = walls.length;
  
//   for(let p = 0; p < length; p++){    
//     let leftP = p - 1;
//     let leftMax = 0;

//     while(leftP >= 0){
//       leftMax = Math.max(walls[leftP], leftMax);
//       leftP--;
//     }

//     let rightP = p + 1;
//     let rightMax = 0;

//     while(rightP < length){
//       rightMax = Math.max(walls[rightP], rightMax);
//       rightP++;
//     }

//     const currentHeight = walls[p];
//     const currentWater = Math.max(Math.min(leftMax, rightMax) - currentHeight, 0);
//     totalWater += currentWater;

//     //console.log({p, currentWater, totalWater, leftMax, rightMax});
//   }

//   return totalWater;
// }

// ----------------------------------------------------------------------------------------------
// Solution 2 : Two Pointers
// const getTrappedRainwater = function(walls){
//   const length = walls.length;
//   let totalWater = 0;
//   let leftP = 0;
//   let rightP = length - 1;
//   let leftMax = walls[leftP];
//   let rightMax = walls[rightP];

//   while(leftP <= rightP) {
//     let currentHeight, currentWater;
//     if(leftMax < rightMax){
//       currentHeight = walls[leftP];
//       currentWater = Math.max(leftMax - currentHeight, 0);
//       totalWater += currentWater;

//       //console.log({leftP, rightP, currentWater, totalWater});
//       //console.log("  ", {leftMax, rightMax});
      
//       leftMax = Math.max(currentHeight, leftMax);
//       leftP++;
//     }
//     else{
//       currentHeight = walls[rightP];
//       currentWater = Math.max(rightMax - currentHeight, 0);
//       totalWater += currentWater;

//       //console.log({leftP, rightP, currentWater, totalWater});
//       //console.log("  ", {leftMax, rightMax});

//       rightMax = Math.max(currentHeight, rightMax);
//       rightP--;
//     }        
//   }

//   return totalWater;
// }

// const getTrappedRainwater = function(walls){
//   let totalWater = 0, left = 0, right = walls.length - 1, leftMax = 0, rightMax = 0;

//   while(left < right) {    
//     if(walls[left] < walls[right]){
//       if(walls[left] < leftMax){
//         totalWater += (leftMax - walls[left]);                
//       }
//       else {
//         leftMax = walls[left];
//       }
//       left++;
//     }
//     else{
//       if(walls[right] < rightMax){
//         totalWater += (rightMax - walls[right]);
//       }
//       else {
//         rightMax = walls[right];
//       }
//       right--;
//     }
//   }

//   return totalWater;
// }

const getTrappedRainwater = function(walls){
  let totalWater = 0, left = 0, right = walls.length - 1, leftMax = walls[left], rightMax = walls[right];

  while(left < right) {
    leftMax = Math.max(leftMax, walls[left]);
    rightMax = Math.max(rightMax, walls[right]);
    
    if(leftMax < rightMax){      
      totalWater += (leftMax - walls[left]);      
      left++;
    }
    else{
      totalWater += (rightMax - walls[right]);
      right--;
    }        
  }

  return totalWater;
}

// ----------------------------------------------------------------------------------------------
// Test Drive
const setHeightWalls = [
  {
    'in': [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2],
    'out': 8
  },
  {
    'in': [0],
    'out': 0
  },
  {
    'in': [1],
    'out': 0
  },
  {
    'in': [1, 2],
    'out': 0
  },
  {
    'in': [1, 0, 2],
    'out': 1
  }
];

for(let i in setHeightWalls){
  let actualOut = getTrappedRainwater(setHeightWalls[i].in);
  let expectedOut = setHeightWalls[i].out;
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
  Space Complexity: O(1)
2. Solution 2. Improve! Using two pointers
  Time Complexity: O(N)
  Space Complexity: O(1)
*/