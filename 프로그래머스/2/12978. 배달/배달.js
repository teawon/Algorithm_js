function solution(N, road, K) {
    let answer = 0;
    const graph = Array(N+1).fill().map(() => []);
    const distance = Array(N+1).fill(Infinity);
    
    for(const [start, end, dis] of road){
        graph[start].push([end,dis]);
        graph[end].push([start,dis]);
    }
    
    
    const pq = [{node : 1 , dis : 0}];
    distance[1] = 0;
    pq.sort((a,b) => a.dis-b.dis);
    
    while(pq.length > 0){
        const {node, dis} = pq.shift(); 
        
        if(distance[node] < dis) continue;
        
        
        for(const [targetNode, targetDis] of graph[node]){
            const nextDis = dis + targetDis;
            
            if(nextDis < distance[targetNode]){
                distance[targetNode] = nextDis;
                pq.push({node : targetNode, dis :nextDis})
            }
        }
    }
    
    for(let i = 1; i <= N; i++) {
        if(distance[i] <= K) {
            answer++;
        }
    }
    
    return answer;
}