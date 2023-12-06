/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 /**
  긴 문자열에 대해서 오버플로우 발생 
"곱셈은 아니고, 123 * 3 + 123 * 40 + 123 * 500.. 이렇게 나누면 괜찮겠지? ->"
-> 어처피 "큰 수" 연산에 대한 오버플로우가 발생하기때문에 아예 이렇게 접근하면 안됌

    - 곱셈은 어쩔수 없고, 각자리수의 곱셈 결과를 더할때 문자열 연산을 하자.
    
    1. 처음에는 문자열연산을 했는데, 인스턴스를 너무 빈번하게 생성하니 문제점 발생.
    2. n, m 자릿수의 두 수를 곱하면 최대 n+m의 자리를 가질 수 있다.
  */
var multiply = function(num1, num2) {
    if(num1 === "0" || num2 ==="0") return "0";

    const long = num1.length > num2.length ? num1 : num2;
    const short = num1.length <= num2.length ? num1 : num2;

    const result =  Array(long.length + short.length).fill(0);

    for(let i=long.length-1; i>=0; i--){
        for(let j=short.length-1; j>=0; j--){
            //한 자리 연산 
            const mul = Number(short[j]) * Number(long[i]);
            // const placeConst = (long.length-1-i + short.length-1-j)
            result[i+j+1] += mul % 10;
            result[i+j] += Math.floor(mul / 10);
        }
    }


    function checkOver10(index){
        if(result[index] < 10) return;
        result[index-1] += Math.floor(result[index] / 10);
        result[index] %= 10;
        checkOver10(index-1);
    }

    for(let i=0; i<result.length; i++){
        checkOver10(i);
    }


    while (result[0] === 0 && result.length > 1) result.shift();
    return result.join("")
};