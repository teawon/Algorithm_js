/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {

    // 결과적으로 정답인덱스는 모두가 가르켜서 count가 n-1이 될것
    // 동시에 자기 자신이 가리키면 안되므로 가리키면 카운트 지움

    const trustCount = Array(n).fill(0);

    for(let i=0; i<trust.length; i++){
        const [src, target] = trust[i];
        
        trustCount[src-1] = -1;
        trustCount[target-1]++;
    }

    for(let i=0; i<n; i++){
        if(trustCount[i] === n-1
        ){
        return i+1;
        }
    }

    return -1;

};