function solution(n, lost, reserve) {
    var answer = 0;
    
    const student = Array(n+1).fill(1);
    let lostCount = 0;
    
    for(let i=0; i<reserve.length; i++){
        student[reserve[i]]++;
    }
    
    for(let i=0; i<lost.length; i++){
        student[lost[i]]--;
    }
    
    for(let i=1; i<n+1; i++){
    
        if(student[i] < 1){
            if(student[i-1] == 2){
                student[i-1]--;
            }
            
            else if(student[i+1] == 2){
                student[i+1]--;
            }
            else{
                lostCount++;
            }
        }
        
    }
    
    
    return n-lostCount;
}