function solution(n, computers) {
    var answer = 0;
    
    const visited = Array(n).fill(false);
    
    for(let i=0; i<n; i++){
        if(!visited[i]){
            checkComputer(i);
            console.log(i);
            answer++;
        }
    }
    
    
    function checkComputer(node){
        if(visited[node]) return;
        
        visited[node] = true;
        
        for(let i=0; i<n; i++){
            if(computers[node][i] === 1 && !visited[i]){
                checkComputer(i); 
            }
        }
        
    }
    
    return answer;
}