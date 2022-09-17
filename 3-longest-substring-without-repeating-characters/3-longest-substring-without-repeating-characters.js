/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = new Set(s).size;
    for(let i = n; i > 0; i--) {
        for(let j = 0; j <= s.length-i; j++) {
            const str = s.substring(j, j + i);
            if(str.length === new Set(str).size) return str.length;
        }
    }
    return 0;
};