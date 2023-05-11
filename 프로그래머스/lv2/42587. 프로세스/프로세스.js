function solution(priorities, location) {
  
    var answer = [];
    var sortedArr = [...priorities].sort((a,b)=> b-a);
    

    let count = 0;
 
    while(count < priorities.length){
        for(let i=0; i<priorities.length; i++){
            if(sortedArr[count] === priorities[i]){
                if(i === location){
                    
                    return count+1
                    }
                count++;
            }
        }
        
        
    }
     
    return -1;
}
/* 
   [문법 요소] 
// 1. sort는 원본배열을 바꾸기 때문에 유지하려면 복사 후 정렬을 수행해야함
*/ 