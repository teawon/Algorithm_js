/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {

    // 1. 객체 형태이므로 배열이 아닌, Object를 사용할 것
    // 2. Object의 경우 for .. in 문법을 통해 순회 가능

    const strCount = {};

    let answer = 0;

    for(const str of t){
        if(!strCount[str]){
            strCount[str] = 0;
        }
        strCount[str]++;
    }

    for(const str of s){
        if(strCount[str] > 0){
            strCount[str]--;
        }
    }


    for (const key in strCount) {
        answer+= strCount[key]
    }
    
    return answer;
};