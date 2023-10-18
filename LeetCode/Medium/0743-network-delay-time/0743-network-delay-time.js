/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const distance = Array(n+1).fill(Infinity);
    const graph = Array(n+1).fill().map(() => []);

    for(let i=0; i<times.length; i++){
        const [start, end, time] = times[i];
        graph[start].push([end, time]);
    }

    distance[k] = 0;

    const pq = [{node: k, time: 0}];
    while (pq.length > 0) {
        pq.sort((a, b) => a.time - b.time); // 더 효과적인 방법이 있다면 사용해야함. 
        const { node, time } = pq.shift();

        if(distance[node] < time) continue;

        for(const [next, nextTime] of graph[node]){
            const newTime = time + nextTime;
            if(distance[next] > newTime){
                distance[next] = newTime;
                pq.push({node : next, time:newTime});
            }
        }
    }

    let maxTime = Math.max(...distance.slice(1));


    return maxTime === Infinity ? -1 : maxTime;
};