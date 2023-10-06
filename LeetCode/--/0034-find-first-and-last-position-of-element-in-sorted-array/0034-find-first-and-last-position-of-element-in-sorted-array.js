/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
     let left = 0;
     let right = nums.length-1;

     while(left <= right){
         let mid = Math.floor((left+right)/2);
         
         if(nums[mid] >= target){
             // 왼쪽 탐색
            right = mid - 1;
         }
         else{
             left = mid + 1;
         }
     }

     const startIndex = nums[right+1] === target ? right+1 : -1;

     let endIndex = startIndex;

     if(startIndex === -1){
         return [-1,-1];
     } 
     else{
         while(endIndex+1 < nums.length && nums[endIndex+1] === target){
             endIndex++;
         }
     }
     
     return [startIndex,endIndex];
};