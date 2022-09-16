/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
const maximumScore = function(nums, multipliers) {
    const dp = Array.from({length:multipliers.length},()=>new Map());

    const maxScore = (n = 0, m = 0) => {
        if(m >= multipliers.length) return 0;
        if(dp[m].has(n)) return dp[m].get(n);
        
        const first = nums[n] * multipliers[m] + maxScore(n + 1, m + 1);
        const last = nums[nums.length - 1 - (m - n)] * multipliers[m] + maxScore(n, m + 1);
        
        const result = Math.max(first, last);
        dp[m].set(n, result);
        
        return result;
    }
    return maxScore();
};