/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {


    let left = 0;
    let right = nums.length-1;


    // 비교할 mid값을 기준으로 이 값이 왼쪽 / 오른쪽 정렬범위에 있는지 확인해야한다.

    while(left <= right){
        const mid = Math.floor((left+right)/2);

        if(nums[mid] === target){
            return mid;
        }

        // 1. 왼쪽정렬 범위
        if(nums[mid] >= nums[left]){ 
            if(target < nums[mid] && target >= nums[left]){
                right = mid - 1;
            }
           // 1.1) 작으면 왼쪽으로 이동한다
           // 1.2) 근데 가장 왼쪽값이 target보다 크면, 아예 오른쪽 정렬범위로 넘어가야한다
           else{
               left = mid + 1;
           }
        }
        else{
            // 2. mid값이 오른쪽 정렬범위에 존재한다
            if(target > nums[mid] && target <= nums[right]){
                left = mid + 1;
            }
            // 2.1 target이 더 커야하면 오른쪽으로 이동
            // 2.2 근데 가장 오른쪽값은 target보다 커야한다. 그렇지 않으면 왼쪽구간으로 넘어가야함
            else{
                right = mid -1;
            }
        }
    }

    return -1;
    
};

