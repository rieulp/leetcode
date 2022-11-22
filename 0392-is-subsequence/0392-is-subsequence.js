/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for(w of s) {
        if(!t.includes(w)) return false;
        const regex = new RegExp(`\\w*?${w}`)
        t = t.replace(regex,'');
    }
    return true;
};