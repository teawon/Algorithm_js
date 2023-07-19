function solution(number, k) {
    
    // 결국 앞자리가 커야한다. 
    
    const n = number.length;
    let delCount = 0;
    
    let answer = []
    
    
 
    // 1 9 2 4
    for(let i=0; i<n; i++){
      
        let cur = number[i];
        while(delCount < k && answer[answer.length-1] < cur){
            delCount++;
            answer.pop();
        }
             
        answer.push(cur);
    }
    
    while(delCount < k){ // 9876543이 들어와서 지운게 없을때
        answer.pop();
        delCount++;
    }
    
    return answer.join("");
}