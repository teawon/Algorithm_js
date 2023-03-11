function solution(s) {
    let answer = "";
    
    let splited_str = s.split(' ');
    
    splited_str.forEach((str, i) => {
    answer = answer+(str.charAt(0).toUpperCase());
    answer = answer+ (str.substr(1 , str.length-1).toLowerCase());
    if(i !== splited_str.length-1){
        answer = answer + " ";
    }
});
    
    return answer;
}

// 1. 문자열을 공백으로 분리할 것
// 2. 분리된 각 문자열을 순회하며 대소문자로 수정하기 