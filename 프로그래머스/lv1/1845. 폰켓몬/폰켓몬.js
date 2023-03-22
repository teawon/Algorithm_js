function solution(nums) {

   let noDuplicated = new Set(nums);
   
   return Math.min(nums.length/2 ,noDuplicated.size);
    
   /*
       중복하지 않은 각 키의 개수를 for문으로 직접 계산하지 않고 Set을 사용하기
   */

    // var answer = 0;
    // let count = 0;
    // let poket = [];
    // for(val of nums){
    //     if(!poket.includes(val)){
    //        poket.push(val);
    //        count++;
    //      }
    // }
    // count = Math.min(nums.length/2 , count)
    // return count;
    
 
    
}


/* 
   [문법 요소]
// 1. push - 배열에 요소 추가
// 2. array.includes()  -포함여부 확인
// 3. new Set(arr) - 집합으로 만듦(중복 제거)
// 4. set.size - 길이 접근
*/ 
