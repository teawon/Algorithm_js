/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if(nums.length === 1) return true
    
    if(nums[nums.length-1] > nums[0]) {
      for(let i=0; i<nums.length-1; i++){
         if(nums[i] > nums[i+1]) return false
      }
     return true
    }
    

    for(let i=0; i<nums.length-1; i++){
         if(nums[i] < nums[i+1]) return false
    }
    return true
    
};