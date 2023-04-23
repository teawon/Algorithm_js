function solution(array, commands) {
     var answer = [];
    
    for(let i=0; i<commands.length; i++){
        const [start , end, index] = commands[i];
     
        const sortedList = array.slice(start-1,end).sort((a,b) => a - b);
        // console.log(sortedList);
        answer.push(sortedList[index-1]);
    }
    
   
    return answer;
}

/* 
   [문법 요소]
  1. 배열 비구조화 할당
  -> 배열의 각 원소를 하나의 변수로 쉽게 할당할 수 있는 방법 
  (const [start, end, k] = commands[i]; )

  2. array.push -> 배열의 끝에 새로운 요소를 추가
  
  3. array.slice(start-1,end) -> start ~ end 요소 추출
  (subString은 문자열만)
  
*/ 