/**
 * @param {string} s
 * @return {string}
 */

 // 한 개 이상의 공백을 어떻게 없앨것인가? -> 정규 표현식 사용하기
 // 배열의 역순을 구하는건 단순히 reverse메서드를 사용하면 된다.
 
var reverseWords = function(s) {

    const delGapStr = s.split(/\s+/g);
    return delGapStr.reverse().join(" ").trim();
};

/**
  // 초기 코드

    const parseStr = s.replace(/\s+/g, " ");
    const strArr = parseStr.split(" ");

    console.log(strArr)

    const reverseArr = strArr.map( (_,index) => {
        return strArr[strArr.length - index - 1];
    })

    return reverseArr.join(" ").trim();

 */