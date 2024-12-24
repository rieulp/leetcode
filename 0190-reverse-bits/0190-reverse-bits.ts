function reverseBits(n: number): number {
    const len = 32;

    let reversed = 0;
    for (let i = 0; i < len; i++) {
        reversed <<= 1;
        reversed = reversed | n & 1;
        n >>>= 1;
    }
    return reversed >>> 0
};