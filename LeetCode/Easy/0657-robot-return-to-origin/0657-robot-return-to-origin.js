/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const moveArr = moves.split("");
    
    const moveCount = {
        "U" : 0,
        "D" : 0,
        "L" : 0,
        "R" : 0,
    }

    for(const moveDir of moves){
        moveCount[moveDir]++;
    }

    if(moveCount["U"] === moveCount["D"] && moveCount["L"] === moveCount["R"]) return true;

    return false;
};