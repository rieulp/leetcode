function countBits(n: number): number[] {
    const ans: number[] = [0]
    const size = Math.floor(Math.log2(n)) + 1

    for (let i = 1; i <= size; i++) {
        const len = ans.length;
        for (let j = 0; j < len; j++) {
            if (ans.length >= n + 1) break;
            ans.push(ans[j] + 1);
        }
    }

    return ans
};