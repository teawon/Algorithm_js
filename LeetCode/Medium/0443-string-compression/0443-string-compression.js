/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0; // 새로운 배열에 값을 저장할 인덱스

    for(let i=0; i<chars.length; i++){
        let char = chars[i]; //현재 값
        let count = 1;


        // 연속된 문자까지 i와 count를 연산
        while(i+1 < chars.length && chars[i] === chars[i+1]){
            i++;
            count++;
        }

        chars[index] = char;
        index++;

        if(count>1){
             for (let digit of count.toString()) {
                chars[index] = digit;
                index++;
            }
        }

        // console.log(chars);
    }

    return index;
};