/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    function checkEquals(index){
        if(index + needle.length > haystack.length) return false;

        for(let i=0; i<needle.length; i++){
            if (needle[i] !== haystack[i+index]) return false;
        }
        
        return true;
    }

    for(let i=0; i<=haystack.length - needle.length; i++){
        if(checkEquals(i)){
            return i;
        }
    }

    return -1;
};