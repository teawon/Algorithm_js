/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
 
    let curSum = 0;
    for(let i=0; i<k; i++){
        curSum += nums[i]
    }

    let maxSum = curSum;
 
    for(let i=1; i<nums.length+1-k; i++){
      curSum = curSum + nums[i+k-1] - nums[i-1];
      maxSum = Math.max(maxSum, curSum);

    }
    
    return maxSum/k
};