/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    const m = (coordinates[1][1] - coordinates[0][1]) === 0 ? NaN : (coordinates[1][0] - coordinates[0][0]) / (coordinates[1][1] - coordinates[0][1])


    for(let i=0; i<coordinates.length-1; i++){
        const xGap =  coordinates[i+1][1] - coordinates[i][1];
        if(Number.isNaN(m) && xGap === 0) continue;
        
        const predict = m * xGap;
        const yGap =  coordinates[i+1][0] - coordinates[i][0];
        if(predict !== yGap) return false;
    }

    return true;
};