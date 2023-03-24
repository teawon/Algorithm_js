  /*
       1. sort를 사용한 풀이법
       2. map을 이용한 각 키의 개수를 확인
       3. for문으로 각 키의 개수를 다 계산 -> 시간 초과 발생
  */
function solution(participant, completion) {
    
    let map = new Map();
    
    for(let i=0; i<participant.length; i++){
        map.set(participant[i],  (map.get(participant[i]) || 0) + 1);
        map.set(completion[i],   (map.get(completion[i])  || 0)  - 1);
    }
    
   for(let i=0; i<participant.length; i++){
     
        if(map.get(participant[i])!=0)
        {
            return participant[i];
        }   
   }
    
    return participant[-1];
}

/* 
   [문법 요소]
  1. new Map() - map생성
  2. map.set("key","value")
  3. map.get("key")
  
  (key에는 undefined속성도 들어갈 수 있다) -> 따라서 배열의 인덱스틀 넘어가도 오류 X
*/ 
