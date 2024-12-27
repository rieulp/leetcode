function climbStairs(n: number): number {
    const MAX_STEP = 2
    const dp = Array(n + 1).fill(0);

    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        dp[i] += dp[i - 1];
        if (i - MAX_STEP >= 0) dp[i] += dp[i - MAX_STEP]
    }

    return dp[n]
};