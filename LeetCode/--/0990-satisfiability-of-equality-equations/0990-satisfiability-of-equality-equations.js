/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {

function find(i){

    if(parent[i] !== i){
        parent[i] = find(parent[i]);
    }
    return parent[i];
}


function union(i,j){
    parent[find(i)] = find(j);
}

const n = equations.length;
const parent = {}

    for(let i=0; i<n; i++){

           let left = equations[i].slice(0,1);
            let right = equations[i].slice(3,4);

            if(!parent[left]){
                parent[left] = left;
            }
             if(!parent[right]){
                parent[right] = right;
            }

        if(equations[i].slice(1,3) === "=="){
            union(left , right);  
        }
    }

   console.log(parent)
    for(let i=0; i<n; i++){
        if(equations[i].slice(1,3) === "!="){
            let left = equations[i].slice(0,1);
            let right = equations[i].slice(3,4);
            if(find(left) === find(right)){
                return false;
            }
        }
    }

    return true;
};