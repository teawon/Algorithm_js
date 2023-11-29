/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // 가장 큰 사탕개수를 구하고, 여분의 값을 받은 현재값과 이를 비교하기

    const maxCandyCount = Math.max(...candies);
    return candies.map((count) => count+extraCandies >= maxCandyCount);
};