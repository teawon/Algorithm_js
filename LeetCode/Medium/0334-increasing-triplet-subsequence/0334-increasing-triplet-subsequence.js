/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;


    // 10 15 1 16
    for(let i=0; i<nums.length; i++){

        // 가장 작은 수 
        if(nums[i] <= first){
            first = nums[i];
            continue;
        }
        // 두번째로 작은 수 존재
        if(nums[i] <= second){
            second = nums[i];
            continue;
        }

        // 특정 정수가, 첫번째, 두번째 수 보다 크다는 것을 의미
        return true;
    }

    return false;
};


/**

    // 값을 순회하며, 3번 이상 값이 커지는지 확인하기(?) -> 10 13 5 16 반례 존재.
    // 증가하는 수열 문제와 유사하다.
    
  //10 100 12이 들어왔으면?
  // 0 1  
    const increseArr = [];

    function findIndex(value){
        let left = 0;
        let right = increseArr.length;

        while(left <= right){
            const mid = Math.floor((left+right) / 2);
            if(increseArr[mid] < value){
                left = mid + 1;
            }
            else{
                right = mid - 1; 
            }
        }
        return left;
    }

    for(let i=0; i<nums.length; i++){
        // nums[i]의 값이 increseArr의 인덱스를 찾는다
        // 만약 길이 밖이라면? 추가하기
        // 만약 특정 인덱스값이라면 해당 인덱스의 값 변경하기 
        const index = findIndex(nums[i]);

        if(index >= increseArr.length){
            increseArr.push(nums[i]);
        }
        else{
            increseArr[index] = nums[i];
        }
        
        if( increseArr.length > 2){
            return true;
        }
    }


    return false;
 */