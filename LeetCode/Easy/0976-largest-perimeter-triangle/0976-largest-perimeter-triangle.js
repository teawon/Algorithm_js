/**
 * @param {number[]} nums
 * @return {number}
 */
 /**
     삼각형의 조건 - 긴 변의 < 나머지 두 변의 합
     1 2 3 4 5 6 7 8 9 100
  */
var largestPerimeter = function(nums) {
    const sortedNum = nums.sort((a,b) => a-b);
    
    for(let i = nums.length; i > 1; i--){
        if(sortedNum[i] < sortedNum[i-1] + sortedNum[i-2]) {
            return sortedNum[i] + sortedNum[i-1] + sortedNum[i-2];
        }
    }
  
    return 0;
    
};

