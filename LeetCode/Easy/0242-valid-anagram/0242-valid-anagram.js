/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false;

    let sOb = {}
    let tOb = {}

    for(let i=0; i<s.length; i++){
        sOb[s[i]] = (sOb[s[i]] || 0) + 1
        tOb[t[i]] = (tOb[t[i]] || 0) + 1
    }


    for(const key in sOb){
        if(sOb[key] !== tOb[key]) return false;     
    }

    return true;
};