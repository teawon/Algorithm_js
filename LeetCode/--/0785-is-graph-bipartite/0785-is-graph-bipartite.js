/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    
    const RED = 1;
    const BLUE = 2;
    const n = graph.length;
       
    const visited = Array(n).fill(0);
   
    function bfs(index) {

        const queue = [index];
        visited[index] = RED; 
     
        while(queue.length > 0){
            const node = queue.shift();

            for(const next of graph[node]){ // in과 of차이
            
                if(visited[next] === visited[node]){
            
                    return false;
                }

                if(!visited[next]){
                    visited[next] = visited[node] === RED ? BLUE : RED;
                    queue.push(next);
                }
            }
        }

        return true;
    }
 

    for(let i=0; i<n; i++){
        if(visited[i] === 0){
            visited[i] = RED;
            if(!bfs(i)){
                return false;
            }
        }
    }
    return true;
};