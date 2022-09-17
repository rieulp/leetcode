/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = new Set(s).size;
    for(let i = n; i > 0; i--) {
        for(let j = 0; j <= s.length-i; j++) {
            const set = new Set();
            for(let k=j; k<j+i; k++) {
                if(set.has(s[k])) break;
                set.add(s[k]);
            }
            if(set.size===i) return i;
        }
    }
    return 0;
};