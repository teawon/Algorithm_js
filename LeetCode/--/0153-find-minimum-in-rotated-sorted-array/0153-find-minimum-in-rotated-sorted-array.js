/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    let left = 0;
    let right = nums.length-1;


    while(left<right) {
        // 같은 지점 처리가 애매함. 넘어가는 경우가 있어서.. [ 5, 1 ,3]일때 회전지점에서 연산해버림
        
        let mid = Math.floor((left+right)/2);
        
        if(nums[mid] > nums[right]){
            // 회전구간은 오른쪽에 있음
            left = mid+1;
        } 

        else{
            // 이제 왼쪽으로 범위를 좁혀나갈것
            right = mid;
        }
    }
    return nums[left];
    // 기존의 같은 값 비교와 다르게, 조건식이 mid를 기준으로 회전구간의 시작점을 옮기고
    // right 값을 좁혀가면서 값을 줄여나간다
    // 따라서 left<=right 조건을 사용하지 않는데 그 이유는
    // 1. 회전구간에 위치할경우 left가 이동해버림
    // left<=right를 하면 동일한 위치에 대한 예외처리를 위해 Mid+1 mid-1 등 중간지점을 건너뛰어야함
    // 근데 저 과정에서 회전구간의 범위를 벗어나서 if문조건이 애매..

    // => 정리하면, 회전구간의 범위를 찾아서 해당 구간내에서 right값을 줄여간다.

    
};