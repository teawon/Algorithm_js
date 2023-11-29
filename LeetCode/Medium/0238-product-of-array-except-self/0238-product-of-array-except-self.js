/**
 * @param {number[]} nums
 * @return {number[]}
 */

     // 전체를 곱한 계산결과를 계산하고, 각 원소는 자기 자신을 나누기?
    // 0이 1개일때와, 아닐때로 연산 로직이 나뉜다. -> 근데 나눗셈 쓰지말래
var productExceptSelf = function(nums) {
    
    // 각 원소에 대해 "왼쪽, 오른쪽" 원소들의 곱 결과를 저장하고, 자기 왼쪽 오른쪽 값 연산하기

    const leftMul = [1];
    let rightMul =[1];

    for(let i=1; i<nums.length; i++){
        leftMul[i] = leftMul[i-1] * nums[i-1];
    }

    for(let i=1; i<nums.length; i++){
        rightMul[i] = rightMul[i-1] * nums[nums.length-i];
    }
    rightMul = rightMul.reverse();

    const answer = []
    for (let i = 0; i < nums.length; i++) {
        answer[i] = leftMul[i] * rightMul[i];
    }

    return answer;

};