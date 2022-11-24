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
        let s=1;
        let e=n;
        if(isBadVersion(1)) return 1;
        let i = Math.ceil((s+e)/2);
        while(s<=e) {
            const i = Math.ceil((s+e)/2);
            if(isBadVersion(i)){
                if(!isBadVersion(i-1)) return i;
                else e=i-1;
            }else s=i+1;
        }
        return n;
    };
};