/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 현재값이 타겟보다 크다면 왼쪽으로 가야하지만, 만약 첫번째 왼쪽값보다 더 작다면 오른쪽으로 가야한다. 순환하니까 제일 작은수가 옆에있음
    // 현재값이 타겟보다 작다면 오른쪽으로 가야하지만 만약 맨 오른쪽 값이 더 작다면 왼쪽으로 가야한다. 오른쪽에는 그거보다 큰 값이 없으니까
    // 아니다 로직이 너무 복잡해짐.

    // 차라리 인덱스를 조절해서 기존의 이진탐색 활용?

    function getIndex(curIndex,startIndex){
   
        // 0 1 2 3 4 5
        // 3 4 5 0 1 2
        // 기존의 2번 인덱스는 0을 가리켜야함  2-2 : 0
        // 기존의 0번 인덱스는 1을 가리켜야함  0-2 : 2
        // 기존의 1번인덱스는 2을 가리켜야함.  1-2 : 1
        return Math.abs( (curIndex+startIndex) % nums.length);
    }



    function getStartIndex(){
        let left = 0;
        let right = nums.length-1;

        while(left<right){

            let mid =Math.floor((left+right)/2);

            if(nums[mid] > nums[right]){
                // 회전지점은 오른쪽에 있음
                left = mid+1;
            }
            else{

               right = mid;
            }
        }
        return left;


        // 기존의 O(n)의 최저값을 계산하던 함수
        // for(let i=1; i<nums.length; i++){
        //     if(minValue > nums[i]){
        //         minValue = nums[i];
        //         minIndex = i;
        //     }
        // }
        // return minIndex;
    }

    const startIndex = getStartIndex();

    let left = 0;
    let right = nums.length-1;

    while(left <= right){
        let mid =Math.floor((left+right)/2);
        
        if(nums[getIndex(mid,startIndex)] <= target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }


    return (target === nums[getIndex(left-1,startIndex)]) ? getIndex(left-1,startIndex) : -1
    
};

