/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let preZero = null;
    let curZero = null;
    let curCount = 0;
    let max = 0;

    for(let i=0; i<nums.length; i++){
        
        if(nums[i] === 0){
            preZero = curZero;
            curZero = i;
            if(preZero) curCount = curZero-preZero-1;
            continue;
        }

        curCount++;
        
        max = Math.max(max, curCount);
    }

    const result = curZero !== null ? max : max-1;
    return result > 0 ? result : 0
};