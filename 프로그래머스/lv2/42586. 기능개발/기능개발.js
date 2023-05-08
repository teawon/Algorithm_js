function solution(progresses, speeds) {
    var answer = [];

    let i=0;
    let day=0;
    let count=0;
    while(true){
        // 먼저 배포되어야 하는 작업까지 걸리는 시간 계산
        day+=Math.ceil((100-progresses[i]-speeds[i]*day)/speeds[i]); 
        console.log(day);
        count = 0;
        
        // 특정 작업이 완료되었을때 동시에 배포될 수 있는 작업 수 계산
        while(true){
            if(i<speeds.length && (progresses[i]+speeds[i]*day)>=100){
                i++;
                count++;
             }
            else{
                break;
            }
         }
        
    answer.push(count);

    if(i >= speeds.length){
         break;
       }
    }

    return answer;
}

/*
   1차 코드 (실수한점)
   -> 문제를 구현하듯 차례대로 풀이하였고 그 과정에서 while문을 사용
   -> 코드 가독성이 떨어지고 Index증가 범위를 찾기 어려움. 체크도 불필요하게 두 번 발생했다.
*/