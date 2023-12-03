/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const s_map = new Map();
    const t_map = new Map();
    for(let i=0; i<s.length; i++){
        s_map.set(s[i], (s_map.get(s[i]) || 0) + 1);
    }

    for(let i=0; i<t.length; i++){
        t_map.set(t[i], (t_map.get(t[i]) || 0) + 1);
    }

    for (const [key, value] of t_map) {
            if(s_map.get(key) !== value){
            return key;
        }
    }
 
    return -1;
};