/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    if(nums.length < 2) return 0;

    let leftSum = 0;
    let rightSum = nums.reduce((acc, value) => acc+value,0);

    for(let i=0; i<nums.length; i++){
        

        leftSum+= nums[i-1] || 0;
        rightSum-=nums[i];
        if(leftSum === rightSum) return i;

         // console.log(leftSum,rightSum)
    }

    return -1;
};