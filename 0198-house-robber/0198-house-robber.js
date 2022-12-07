/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    const memo = Array(n).fill(-1);
    
    const dp = (i) => {
        if(n<=i) return 0;
        if(n-3 < i) return nums[i];

        if(memo[i]>=0) return memo[i];
        
        let max = 0;
        for(let j=i+2; j<n; j++)  max = Math.max(max, dp(j));

        memo[i] = nums[i] + max;
        return memo[i];
    }

    return Math.max(dp(0), dp(1));
};