/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbol = {
        I:1,
        IV:4,
        V:5,
        IX:9,
        X:10,
        XL:40,
        L:50,
        XC:90,
        C:100,
        CD:400,
        D:500,
        CM:900,
        M:1000
    }
    
    let answer = 0;
    
    for(let i=0; i<s.length; i++) {
        if(s[i+1] && symbol[s[i]+s[i+1]]){
            answer+=symbol[s[i]+s[i+1]];
            i++;
        }else answer+=symbol[s[i]]
    }
    
    return answer;
};