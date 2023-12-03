/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    const sortedArr = arr.sort((a,b) => a-b);

    const gap = sortedArr[1]-sortedArr[0];

    for(let i=0; i<arr.length-1; i++){
        if(sortedArr[i]+gap !== sortedArr[i+1]) return false;
    }

    return true;
};