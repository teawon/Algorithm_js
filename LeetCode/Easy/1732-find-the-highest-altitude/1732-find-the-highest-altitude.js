/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let gap = 0;
    let maxGap = gap;

    for(let i=0; i<gain.length; i++){
        gap += gain[i];
        maxGap = Math.max(maxGap, gap);
    }

    return maxGap
};