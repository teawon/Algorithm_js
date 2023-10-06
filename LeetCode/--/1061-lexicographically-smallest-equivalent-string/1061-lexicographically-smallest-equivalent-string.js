/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {

    // 일단 단어별로 부모를 통일하는데, 사전순으로 작아야하므로 합칠때는 항상 작은거 위주로 합치기.
    // 각 단어별 사전순으로 작은 부모를 결정하고, 마지막에 baseStr에서는 find로 최상단의 부모요소만 가져와서 출력하기?

    const parent = {} 
    const n = s1.length;

    function find(i) {
        if(parent[i]!==i){
            parent[i] = find(parent[i]);
        }
        return parent[i];
    } 



    function union(i,j){
        const pI = find(i);
        const pJ = find(j);

        if(pI > pJ){
            parent[pI] = pJ;
        }
        else{
            parent[pJ] = pI;
        }
    }

    for(let i=0; i<n; i++){
        const str1 = s1[i];
        const str2 = s2[i];

        if(!parent[str1]){
            parent[str1] = str1;
        }
        if(!parent[str2]){
            parent[str2] = str2;
        }

        union(str1,str2)
    }

    const result = [];
    for(let i=0; i<baseStr.length; i++){
        result.push(find(baseStr[i]) || baseStr[i]);
    }

    return result.join('');

    // return baseStr.split('').map(c => find(c) || c).join('');
};