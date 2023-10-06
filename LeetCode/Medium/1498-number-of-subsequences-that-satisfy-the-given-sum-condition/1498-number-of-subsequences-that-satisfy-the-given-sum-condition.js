/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 const MOD = 1e9 + 7;
var numSubseq = function(nums, target) {
    let minIdx = 0;
    let maxIdx = nums.length-1;


    let count = 0;

    nums = nums.sort((a,b) => a-b)

    const pow = [1];  // 오버플로우 방지를 위한 나머지 연산 수행
    for(let i=1; i< nums.length; i++){
        pow[i] = pow[i-1]*2 % MOD;
    }


    while(minIdx <= maxIdx){
        // 3 5 6 7
        if(nums[minIdx] + nums[maxIdx] <= target){
            // 3을 기준으로, 7이 되면? 5,6,7에 대한 모든 쌍이 전부 충족
            // ([3] [3,5] [3,5,6] . [3,6])
            // 이후 5를 기준으로 다시 연산 진행


            //minIdx와 maxIdx사이의 모든 부분집합의 경우의 수를 더한다
            // 3을 포함하고, [5,6]의 부분집합 개수를 계산하는 것.
            count = (count + pow[(maxIdx-minIdx)]) % MOD;
            minIdx++;

        }else{
            maxIdx--; 
        }
    }

    return count;
}