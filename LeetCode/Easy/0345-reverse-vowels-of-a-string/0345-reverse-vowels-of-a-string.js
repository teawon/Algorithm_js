/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const VOWELS = /[aeiouAEIOU]/
    let str = s.split("");
    let left = 0;
    let right = s.length-1;

    while(left < right){
   
        // 왼쪽의 자음 찾기
        while(left < right && !VOWELS.test(s[left])) left++;

        // 오른쪽의 자음 찾기
        while(left < right && !VOWELS.test(s[right])) right--;
    
        // 양쪽에서 찾았다면 값 바꾸기
        if(left < right) [str[left], str[right]] = [str[right], str[left]];
        left++
        right--;
    }

    return str.join("");
  
};

/**
 실수했던 점 - 문자열의 특정 값을 바꿀 수 없으니,(불변객체) 2번 순회했다.
 -> 배열 형태로 수정하면 수정할 수 있다.

  // 정규식으로 모음만 확인할 수 있나?
  const IS_VOWELS = /[aeiouAEIOU]/
  const vowelsArr = []
  const vowelIndex = []

  for(let i=0; i<s.length; i++){
      if(IS_VOWELS.test(s[i])){
          vowelsArr.push(s[i]);
          vowelIndex.push(i);
      }
  }

   let reverseVowelStr = ""

  for(let i=0; i<s.length; i++){
      if(vowelIndex.length > 0 && i === vowelIndex[0]){
          
         vowelIndex.shift();
         reverseVowelStr += vowelsArr.pop();
      }
      else{
          reverseVowelStr += s[i];
      }
  }

  return reverseVowelStr;

 */