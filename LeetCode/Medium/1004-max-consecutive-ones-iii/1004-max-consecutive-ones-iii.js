/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    // 모든 0을 k만큼 1로 바꿨을때 가능한 경우의 수 계산하기
    // 이를 위해 0의 인덱스 정보를 저장하고 k를 넘어갔을때, 마지막으로 저장한 0과 새로운 0의 간격정보를 계산해 연산을 게속해간다.

    let oneCount = 0
    let zeroIndex = [];
    let max = oneCount;

    for(let i=0; i<nums.length; i++){

        oneCount++;
        if(nums[i] === 0) zeroIndex.push(i);
        if(zeroIndex.length > k) {
            let leftIndex = zeroIndex.shift();
            oneCount = k === 0 ? 0 : (zeroIndex[zeroIndex.length-1] - leftIndex)
        }

  
        max = Math.max(max, oneCount);
        // console.log(oneCount)


    }

    return max;
};