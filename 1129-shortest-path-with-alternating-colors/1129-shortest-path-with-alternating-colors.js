/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */

 /*
    -> DFS로 풀었다가 시간초과 발생
    -> 사실 생각해보면 특정 경로가 2배가 된거지 최단경로를 찾는 문제와 동일했다.
    -> 구조할당방식을 사용하면 코드가 간결해짐
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {

 
  const redLen = redEdges.length;
  const blueLen = blueEdges.length;


  const distance= Array(2).fill().map(()=> Array(n).fill(Number.MAX_SAFE_INTEGER));


  const redGraph = Array(n).fill([false]).map(()=> Array(n).fill(false))
  const blueGraph = Array(n).fill(false).map(()=> Array(n).fill(false))

  for(const [start, end] of redEdges){
        redGraph[start][end] = true;
  }

  for(const [start, end] of blueEdges){
        blueGraph[start][end] = true;
  }

  const queue = [[0,0] , [1,0]];  //색 , index 까지의 거리
  distance[0][0] = 0; 
  distance[1][0] = 0;

  while(queue.length > 0){
      const [color , start] = queue.shift();
      
      if(color === 0){ //빨강이면 파랑그래프에 대해 탐색
            for(let i=0; i<n; i++){
                if( redGraph[start][i] && distance[1][i] === Number.MAX_SAFE_INTEGER){
                    distance[1][i] = distance[0][start] + 1;
                    queue.push([1,i]);
                }
            }
      }

      else{
            for(let i=0; i<n; i++){
                if( blueGraph[start][i] &&  distance[0][i] === Number.MAX_SAFE_INTEGER){
                    distance[0][i] =  distance[1][start] + 1;
                    queue.push([0,i]);
                }
            }
      }
  }

  
   const answer = [];

   for(let i=0; i<n; i++){
       const minPath = Math.min(distance[0][i] , distance[1][i]);
       answer.push(minPath === Number.MAX_SAFE_INTEGER ? -1 : minPath)
   }
   return answer
};