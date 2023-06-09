/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */


/*
   1. 초기에는 배열로 선언했으나 메모리초과 발생 -> 메모리를 우선시해야할때 (노드의 개수가 많다)면 리스트 형태를 쓰자
   2.     for(const[start, end] of edges) 이 표현방식을 사용하면 깔끔한 코드로직이 가능
   3. 사실 boolean이라 거리를 계산할필요까진 없지만 BFS에서는 이런 방식으로 최단거리를 계산한다
*/

var validPath = function(n, edges, source, destination) {
    

    const graph = Array(n).fill(null).map(() => []);
    const distance = Array(n).fill(0);


    for( const[start, end] of edges){
        graph[start].push(end);
        graph[end].push(start);
    }

    const queue = [source];
    distance[source] = 1;

    while(queue.length > 0){
        let cur = queue.shift();

        if (cur === destination) {
            return true;
        }

    
        for(const nextNode of graph[cur]){
            if(distance[nextNode] === 0){
                distance[nextNode] = distance[cur]+1;
                queue.push(nextNode);
            }
        }
    }


    return false;
    
};