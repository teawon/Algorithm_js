/**
 * @param {number[]} arr
 * @return {boolean}
 */

 // 처음에는, 특정 값에 대해 (1 카운팅, 2카운팅, 4카운팅... (배열 n*n반복)) 했는데, 
 /// 아예 한번의 반복으로 전체 출현 빈도를 계산하는 식으로 수정
var uniqueOccurrences = function(arr) {
    const countMap = new Map();

    arr.forEach((num) => {
        countMap.set(num, (countMap.get(num) || 0) + 1)
    });
    
    const countArr = [...countMap.values()]

    return countArr.length === new Set(countArr).size
};