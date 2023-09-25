/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 0;
        let right = n;

        while(left <= right){
            let mid = Math.floor((left+right)/2);
            
            // 가장 최초의 false를 찾아야함
            const ans = isBadVersion(mid)

            if(ans){
                // true 뒤 제품을 찾아본다.
                right = mid - 1;
            }
            else{ //false 앞 제품을 찾아본다.
                left = mid + 1;
            }
        }

        return right+1;
    };
};