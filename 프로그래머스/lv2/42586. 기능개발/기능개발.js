function solution(progresses, speeds) {
    var answer = [1];
    
    const calDay = (status , speed) => {
        return Math.ceil((100-status) / speed)
    }
    
    const size = speeds.length;
    
    let resultCount = 0;
    let preCompleteDay = calDay(progresses[0],speeds[0]);
    
    for(let i=1; i<size; i++){
        day = calDay(progresses[i],speeds[i]);
        
        if(preCompleteDay >= day){
            answer[resultCount] ++;
        }
        else{
            preCompleteDay = day;
            answer[++resultCount] = 1;
        }
        
    }
   

    return answer;
}

/*
  // 개선코드 )
  // - 각 진도마다 걸리는 날짜를 계산 후, 이전값보다 큰지 작은지 확인하며 카운팅을 수행한다.
  // - 값을 계산후 배열에 더하는 방식이 아니라, 특정 인덱스값을 하나씩 증가시키면 마지막 인덱스에대한 예외처리를 하지않아도 된다
    (처음에는 계산후 배열에 더했는데 그럼 마지막배열에서 빠져나왔을때 복잡한 예외처리가 필요했었음)
*/