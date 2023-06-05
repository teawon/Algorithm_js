/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    
    const len = isConnected.length
    const checkVisit = Array(len).fill(false);
    let answer = 0;

    function visitCity(start){

    for(let target=0; target<len; target++){
        if(isConnected[start][target] && !checkVisit[target]){
            checkVisit[target] = true;
            visitCity(target)
        }
    }
}

    for(let i=0; i<len; i++){
        if(!checkVisit[i]){
            checkVisit[i] = true;
            visitCity(i);
            answer++;
        }
    }

    return answer;
};
