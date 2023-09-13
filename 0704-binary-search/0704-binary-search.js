/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let start = 0;
    let end = nums.length-1;
    while(start <= end){
        // 중앙값을 기준으로 계산반복
        // 크면 왼쪽, 작으면 오른쪽

        // -1 0 3 5 9 12  만약 3 3이면? -> 크거나, 같으면 End , start .. start-1번째 요소로 
        let mid = Math.floor((start+end)/2);

        // 현재값이 목표물보다 작거나 같으면 -> 이동
        if(nums[mid] <= target){
            start = mid+1;
        }
        else{ // 현재값이 목표보다 크면 <- 이동 
            end = mid-1;
        }
    }
       
    return nums[start-1] === target ? start-1 : -1
};