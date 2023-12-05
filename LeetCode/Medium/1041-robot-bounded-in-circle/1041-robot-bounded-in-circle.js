/**
 * @param {string} instructions
 * @return {boolean}
 */
 /**
    주어진 명령을 1번 or 4번 반복했을때, 처음 위치에 있는지 확인
    4번이 아닌 경우도 있을까?
    - 4번이다. 왜냐하면 로봇의 방향변경은 항상 90도이므로 4번의 반복에 대해서 모든 방향을 고려할 수 있기 때문
    - 근데 사실 끝났을때 방향이 다른 방향을 가리키고 있다면 결국 돌아올수밖에 없다.
      - {움직임 -> 특정 방향} 이를 4번 or 2번 반복하면 결국 원점으로 돌아오기때문.

  */
var isRobotBounded = function(instructions) {
    // 순서대로 N S E W;
    const dx = [1,0,-1,0];
    const dy = [0,1,0,-1];

    let curDir = 0; // 북쪽을 바라보고 있음
    let curY = 0;
    let curX = 0;

    const instructionsArr = instructions.split("");

        for(const command of instructionsArr){
            switch(command){
                case "G" : 
                curY += dy[curDir];
                curX += dx[curDir];
                break;
                case "L":
                    curDir = (curDir+1) % 4;
                    break;
                case "R": 
                    curDir = curDir === 0 ? 3 : (curDir - 1);
                    break;
                default : break;
            }
          
        }

        if((curX === 0 && curY === 0) || curDir !== 0) return true;
   
    
    return false;

};