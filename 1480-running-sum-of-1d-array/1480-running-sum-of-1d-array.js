/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var answer = []

    answer[0] = nums[0];

    for(let i=1; i<nums.length; i++){
        answer[i] = answer[i-1] + nums[i];
    }
    
    return answer;
};