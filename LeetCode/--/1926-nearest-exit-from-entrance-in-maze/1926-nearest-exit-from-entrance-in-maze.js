/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {

  function isGoal(y,x){
      if(x === 0 || x === colL-1 || y === 0 || y === rowL -1){
        return true
      }

      return false;
    }

    const rowL = maze.length;
    const colL = maze[0].length;

    const distance = Array(rowL).fill().map(()=> Array(colL).fill(0));


    let [startRow , startCol] = entrance;
    const queue = [entrance];
    distance[startRow][startCol] = 1;


    const dx = [0 , 1 , 0 , -1];
    const dy = [-1 , 0 , 1 , 0];

  

    while(queue.length > 0){

      const [y , x] = queue.shift();

      for(let i=0; i<4; i++){
        nY = y+dy[i];
        nX = x+dx[i];
        if(nY >= 0 && nY < rowL && nX >= 0 && nX < colL && maze[nY][nX] === '.' && distance[nY][nX] === 0){
          if(isGoal(nY , nX)){
            return (distance[y][x]);
          }

          queue.push([nY , nX]);
          distance[nY][nX] = distance[y][x] + 1;
        }
      }
    }

    return -1;
    
};