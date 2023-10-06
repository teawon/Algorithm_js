/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    // 두 도시와 연결된 최대 도시 개수 찾기
    // 단순한 개수 카운팅?

    // 각 도시에 연결된 개수를 찾고, 100개중 모든 2개쌍에 대해 연결된 개수를 더한다. (이때 서로 연결되어있으면 빼야함)

    let maxCount = 0;

    const connectCount = Array(n).fill(0);

    for(const [start, end] of roads){
        connectCount[start]++;
        connectCount[end]++;
    }


    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){

            if(i === j) continue;

            let = curCount = connectCount[i] + connectCount[j]; // 두 도시의 개수 카운팅
       
            for(const[start, end] of roads){
                if((start === i && end === j) || (start === j && end === i)){
                    curCount--;
                    break;
                }
            }

            maxCount = Math.max(maxCount, curCount);

        }
    }

    return maxCount;
};