/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    for(let i=0; i<s.length ;i++) {
        const s_index = s.indexOf(s[i],i+1);
        const t_index = t.indexOf(t[i],i+1);
        if(s_index !== t_index) return false;
    }
    return true;
};