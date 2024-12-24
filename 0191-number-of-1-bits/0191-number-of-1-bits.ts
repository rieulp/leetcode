function hammingWeight(n: number): number {
    let bitNum = 0;
    while (n > 0) {
        const result = n & 1;
        if (n & 1) bitNum++;
        n >>= 1;
    }
    return bitNum;
};