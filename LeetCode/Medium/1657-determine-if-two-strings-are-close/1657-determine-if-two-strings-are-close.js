/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false;

    // 두 요소의 값을 바꿀 수 있을 때, 동일하게 변경할 수 있는지 확인하기
    // 1) word1의 모든 요소가 적어도 word2에 존재해야한다.
    // 2) 단어의 개수쌍이 맞아야 한다. -> 2개 2개 1개.... // 2개 2개 1개

    const word1Map = new Map();
    const word2Map = new Map();

    for(let i=0; i<word1.length; i++){
        word1Map.set(word1[i], ((word1Map.get(word1[i]) || 0) + 1));
    }

    for(let i=0; i<word2.length; i++){
        word2Map.set(word2[i], ((word2Map.get(word2[i]) || 0) + 1));
    }
            
    const keys1 = [...word1Map.keys()].sort();
    const keys2 = [...word2Map.keys()].sort();
    const values1 = [...word1Map.values()].sort();
    const values2 = [...word2Map.values()].sort();

    return keys1.toString() === keys2.toString() && values1.toString() === values2.toString();



};