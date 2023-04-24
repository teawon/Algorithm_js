
function solution(numbers) {
    var answer = '';
    
    const strNum = numbers.map((num) => String(num));
     // console.log(numbers)
     // console.log(strNum)
    answer = strNum.sort((a, b) => (b + a) - (a + b)).join('');
    
    
    if (strNum[0] === '0') {
    answer = '0';
    }

    return answer;
}