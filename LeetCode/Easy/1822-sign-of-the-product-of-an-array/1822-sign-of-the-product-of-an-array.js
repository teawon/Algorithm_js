/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    if(nums.indexOf(0) !== -1) return 0;

    const negativeCount = nums.reduce((acc,val) => {
        return acc + (val < 0 ? 1 : 0);
    },0)

    return negativeCount % 2 === 0? 1 : -1;
    
};