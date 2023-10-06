/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    // [i , i+1]구간의 값이 같지 않아지는 지점이 존재할 것.
    // 거기서부터 조금씩 왼쪽으로 이동하며 값이 틀어지는 지점을 찾자


    let left = 0;
    let right = nums.length-1;
    

    while(left <= right){

        let mid = Math.floor((left+right)/2);

        mid = mid%2 === 0? mid : mid-1; // 짝수행으로 맞춤

        if(nums[mid] === nums[mid+1]){
            // 구간이 같으면 오른쪽범위의 벗어나는 구간 이어서 탐색
            left = mid + 2;
        }
        else{
            right = mid - 2;
        }
    }
  
    return nums[left];
};