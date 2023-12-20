/**
 * @param {string} s
 * @return {string}
 */

 /**
     시야를 크게보면, 결국 숫자 [str] => str str str 문자열이 나와야하는 법칙을 유지하면된다.
    [str]도 결국 내부적으로 [2[a]] => aa가 나오도록... 현재 str값을 재귀적으로 구할수 있겠지만, stack을 사용해 각 단계를 저장하고 가져오도록
  */
var decodeString = function(s) {
    const stack = [];
    let number = 0;
    let curStr = "";

    for(let char of s){
        if(char === "["){
            stack.push({
                num : number,
                str : curStr,
            })
            number = 0;
            curStr = "";
            continue;
        }
        if(char === "]"){
            const {num, str} = stack.pop();
            curStr = str + curStr.repeat(num);
            number = 0;
            continue;
        }
        if(Number.isInteger(Number(char))){
            number = (number * 10) + Number(char);
        }
        else{
            curStr+=char;
        }
    }

    return curStr;
};