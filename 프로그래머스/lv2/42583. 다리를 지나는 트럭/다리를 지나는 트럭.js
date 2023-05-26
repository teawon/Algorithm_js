/*
 실수한점 & 공부

1. 제발 문제를 똑바로 읽기 - 문제에는 순서가 정해져있다고 명시, 추측 금지
2. 자바스크립트에는 별도의 큐, 스택 구조가없다. 배열을 동적으로 조절할것
3. for문 vs while문에서 shift함수를 쓰면 더 깔끔하게 while문 처리가 가능하다
 
*/

function solution(bridge_length, weight, truck_weights) {
   
   time = 0;
   bridge = Array(bridge_length).fill(0)    
   bridge_weight = 0

   time++;
   bridge.shift();
   currentTruck = truck_weights.shift()
   bridge.push(currentTruck)
   bridge_weight +=currentTruck
   
   
   while(bridge_weight > 0 || truck_weights[0]){
       time++;
       bridge_weight-=bridge.shift();
       currentTruck = truck_weights[0];
       if(currentTruck && bridge_weight+currentTruck <= weight){
           truck_weights.shift()
           bridge.push(currentTruck);
           bridge_weight+=currentTruck
       }
       else{
           bridge.push(0);
       }
       
        // console.log(bridge)
        // console.log(time,"-","bridge_weight : ",bridge_weight)
   }

    return time
 
    
   
}

/* 
   [문법 요소] 
// shift(): 배열의 첫 번째 요소를 제거하고 해당 요소를 반환
// pop(): 배열의 마지막 요소를 제거하고 해당 요소를 반환

// push(): 배열의 끝에 하나 이상의 요소를 추가
// unshift(): 배열의 시작 부분에 하나 이상의 요소를 추가

// Array(length) : length길이의 배열생성
*/