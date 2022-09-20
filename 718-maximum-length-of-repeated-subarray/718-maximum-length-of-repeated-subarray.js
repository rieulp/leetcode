/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let answer = 0;
    const n1 = nums1.length;
    const n2 = nums1.length;

    for(let i=0; i<n1; i++) {
        if(n1-i<=answer) break;
        
        for(let j=0; j<n2; j++) {
            if(n2-j<=answer) break;
            
            if(nums1[i]===nums2[j]) {
                let len = 0;
                while(n1>i+len && n2>j && nums1[i+len]===nums2[j+len])len++;
                answer = Math.max(answer,len);
            }
        }
    }
    
    return answer;
};