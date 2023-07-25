/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
   
    const n = accounts.length;
    const parent = Array(accounts.length).fill(0).map((_,i) => i); // 0,1,2,3.. 초기화 수행
    const emailToId = new Map();
    
    function find(i) {
        if(parent[i] !== i){
            parent[i] = find(parent[i]);
        }

       return parent[i];
    }
     
    const union = (x, y) => {
        parent[find(x)] = find(y);
    };


    for(let i=0; i<n; i++){
        for(let j=1; j<accounts[i].length; j++){
            if(emailToId.has(accounts[i][j])){
                union(i,emailToId.get(accounts[i][j]));
            }
            else{
                emailToId.set(accounts[i][j],i); // 각 email에 해당하는 id 정수 할당
            }
        }
    }

    // console.log(parent)
    // 병합된 이메일을 저장할 맵을 생성
    const emails = new Map();

    for(let i=0; i<n; i++){
        // 특정 계정에 속한 내용이 없으면 만들기
        // parent값 아니까, 해당 값들 순회하면서, 근데 중복되면 안되므로 Set을 통해 값을 만든다.
        const parentId = find(parent[i]);    
        if(!emails.has(parentId)){
            emails.set(parentId, new Set());
        }
        for(let j=1; j<accounts[i].length; j++){
            emails.get(parentId).add(accounts[i][j]);
        }
    }

    // 이제 각 id마다, 중복되지 않는 이메일집합을 자료에 담았다.
    const result = [];

    for(let [id , emailSet] of emails){
        const sortedEmail = Array.from(emailSet).sort();
        const info = [accounts[id][0], ...sortedEmail];
        result.push(info);
    }

    return result;
};