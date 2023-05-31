/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

 // n,n지점은 (n-1,n) + (n,n-1) 두 지점에서 온 경우의 수를 더하면 된다.

 /**
     DFS로 경로 순회하면서 마지막에 도착하면 end? -> 시간초과 발생
     flag를 사용한 긴 코드 -> 코드는 간결하고 가독성 높게짜기!

     재귀적인 DFS 접근 방식:
        재귀 함수를 사용하여 그리드 내의 모든 경로를 탐색
        정확하지만 시간이 오래걸린다.

    
     동적 프로그래밍 접근 방식:
        중복 계산을 회피하고 경로를 탐색할 수 있음
        그리드를 탐색하며 이전 경로 수를 사용하여 현재 셀의 경로 수를 계산




 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length


    const list = Array(m).fill(0).map(()=> Array(n).fill(0));


    list[0][0] = !obstacleGrid[0][0];

    for(let i=1; i<m; i++){
        list[i][0] = obstacleGrid[i][0] === 0? list[i-1][0] : 0;
    }
     for(let i=1; i<n; i++){
        list[0][i] = obstacleGrid[0][i] === 0? list[0][i-1] : 0;
    }

    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            if(obstacleGrid[i][j] === 1) {
                list[i][j] = 0;
            }
            else{
                list[i][j] = list[i-1][j] + list[i][j-1];
            }
        }
    }

    return list[m-1][n-1];
};


