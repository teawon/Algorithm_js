/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    // 각 문자를 순회하며 이미 있었는지 확인
    const map = new Map();

    for(let str of strs){
        const sortedStr = str.split('').sort().join('');
        if(map.has(sortedStr)){
            map.get(sortedStr).push(str);
        }
        else{
            map.set(sortedStr, [str]);
        }
    }

    // console.log(myMap.values()); // MapIterator { [ 1, 2 ], [ 3, 4 ] }
    // console.log([...myMap.values()]); // [ [ 1, 2 ], [ 3, 4 ] ]
    return [...map.values()];
};