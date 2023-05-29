/*
   공부
let obj = { name: 'John', age: 30 };
let { name, age } = obj;

let array = [1, 2, 3];
let [a, b, c] = array;

위 방식과 같이 비구조화 할당을 사용하면 코드를 더 간결하게 표현할 수 있다
*/
function solution(sizes) {

    var maxWidth = 0
    var maxHeight = 0
    
    for(let i=0; i<sizes.length; i++){
        let [size1, size2] = sizes[i].sort((a,b)=> b-a);
        
        maxWidth = Math.max(maxWidth,  size1);
        maxHeight = Math.max(maxHeight,  size2);
    }
    
    return maxWidth*maxHeight;
}

