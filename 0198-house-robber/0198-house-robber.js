/**
 * @param {number[]} nums
 * @return {number}
 */




// ex) 1 2 3 -> [1 , 2,  4] - 각 집에 대한 최대 금액

// 2 1 3 -> [2 , 2]

 // 현재 2를 골랐는데, 3을 보고 계산한다. 3을 고르고 2를 포기하기 vs 2를 고르고 그대로 가기
 // 즉 n번째 집을 털었을때 n-1번째 까지 계산값 vs n-2 + 현재 값을 비교
var rob = function(nums) {

    if(nums.length < 2){ // 초기값 예외처리
      return nums[0];
    }

    var maxMoney = [nums[0] , Math.max(nums[0],nums[1])];

    for(let i=2; i<nums.length; i++){
      maxMoney[i] = Math.max(maxMoney[i-1], maxMoney[i-2] + nums[i]);
    }

    return maxMoney[nums.length-1]
};