/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const len = grid.length;
    const dataMap = new Map();

    let count = 0;

    for(let r=0; r<len; r++){
        const row = []
        for(let c=0; c<len; c++){
            row.push(grid[r][c])
        }
        const rowStr = row.toString();
        dataMap.set(rowStr, (dataMap.get(rowStr) || 0) + 1);
    }

    for(let c=0; c<len; c++){
        const col = []
        for(let r=0; r<len; r++){
            col.push(grid[r][c])
        }
        count += dataMap.get(col.toString()) || 0;
    }

    return count
};