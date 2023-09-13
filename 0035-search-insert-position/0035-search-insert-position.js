/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let start = 0;
    let end = nums.length-1;

 
    while(start <= end){
        let mid = Math.floor((start+end)/2);

        console.log(mid);

        // 목표가 크면, 오른쪽으로 이동해서 탐색 
        if(nums[mid] <= target){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }

    if(nums[start-1] === target){
        return start-1;
    }
   
    return start;
  
};