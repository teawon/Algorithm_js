function solution(people, limit) {
    
    let start = 0;
    let end = people.length-1;
    
    let sorted = people.sort( (a,b) => b-a);
    let count = 0;
    
    while(start <= end) {
        
       if(sorted[start] + sorted[end] <= limit){
           // 가장 무거운사람과 가벼운사람을 한 배에 태울 수 있는지 확인
           start++;
           end--;
           count++;
        }
        else{
            // 못태우면 무거운사람만 혼자 보냄
            start++;
            count++;
        }
    }    

    return count;
}