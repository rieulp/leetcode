function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;

    const sortedNums = [...nums].sort((a, b) => a - b);

    let preNum = sortedNums[0]
    let len = 1;
    let maxLen = len;

    for (let i = 1; i < sortedNums.length; i++) {
        const num = sortedNums[i];
        if (preNum === num) continue;
        else if (preNum + 1 === num) len++;
        else {
            maxLen = Math.max(len, maxLen);
            len = 1;
        }
        preNum = num;
    }

    maxLen = Math.max(len, maxLen);
    return maxLen;

};