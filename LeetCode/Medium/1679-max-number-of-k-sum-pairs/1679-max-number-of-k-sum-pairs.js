/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    
    let caseCount = 0;
    const sortedNum = nums.sort((a,b) => a-b);
    
    let left = 0;
    let right = nums.length-1;

    while(left < right){

        const leftValue = sortedNum[left];
        const rightValue = sortedNum[right];
    
        if(leftValue + rightValue === k){
            left++;
            right--;
            caseCount++;
            continue;
        }
        
        if(leftValue + rightValue < k) left++;
        else right--;

    }
 
    return caseCount;
};