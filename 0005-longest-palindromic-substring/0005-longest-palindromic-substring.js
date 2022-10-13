/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let answer = '';
    let max = Number.MIN_SAFE_INTEGER;
    const n = s.length;
    
    for(let i=0; i<n; i++) {
        let index = s.indexOf(s[i], i+1);
        while(index>0) {
            if(index-i+1>max){
                let j=0;
                for(j=0; j<index-i-1; j++) {
                    if(s[i+j]!==s[index-j]) break;
                }
                if(j===index-i-1) {
                    max=index-i+1;
                    answer = s.substring(i,index+1);
                }
            }
            index = s.indexOf(s[i], index+1);
        }
    }
    
    return answer||s[0];
};