function solution(name) {
    
    const n = name.length;
    let sum = 0;
    let minMove = n - 1;
    
    for(let i=0; i<n; i++){
        
        // 각 인덱스에 대해 연산횟수 계산
        let up = name[i].charCodeAt()-'A'.charCodeAt();
        let down = 'Z'.charCodeAt() - name[i].charCodeAt() + 1;
        sum = sum + Math.min(up,down);

        let next = i+1;
        while(next < n && name[next] ==="A") {
            next++
        }
  
        // case1 : 그냥 직진 minMove
        // case2 : 초기위치->현재위치 -> 뒤로가서 목적지
        // case3 : 처음부터 바로 뒤로가서 목적지 -> 현재위치
        
        console.log(i,"(이전)인덱스까지 최단경로 계산값 : ", minMove);
        minMove = Math.min(minMove, 2*i + (n - next), (n-next)*2 + i);
        console.log(i,"(이후)인덱스까지 최단경로 계산값 : ", minMove);
    }

    return sum + minMove;
}