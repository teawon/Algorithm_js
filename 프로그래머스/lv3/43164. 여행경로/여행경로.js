// 각 경로를 탐색하다가 결국 갈 곳이 없다면, 이 경로는 현재 기준으로 마지막에 들어와야한다는 풀이방식이 특이했다.

function solution(tickets) {
 
    const len = tickets.length;
    const connect = {};
    const visited = {};
    
    for(let i=0; i<len; i++){
        const [start,end] = tickets[i];
        if(!connect[start]){
            
            connect[start] = [];
        }
        connect[start].push(end);
    }
    
    for (const airport in connect) {
        connect[airport].sort().reverse();
    }
    

    
    const stack = ["ICN"]
    const path = []
    
    while(stack.length >0){
        const top = stack[stack.length-1];
        
        if(connect[top] && connect[top].length > 0){
            stack.push(connect[top].pop()); // 갈 수 있는 경로가 있다면 경로에 추가한다
        }
        
        else{
            path.push(stack.pop()); // 갈 수 있는 경로가 없다면 이 경로는 현재 기준으로 마지막에 무조건 선택되어야 한다. 따라서 경로에 넣음 (역순으로)
        }
        
    }


    return path.reverse();
}