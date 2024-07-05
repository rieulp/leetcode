function reverse(x: number): number {
    const isPositive = x >= 0;
    const MAX = Math.pow(2,31);
    const reversedNum = +([...(isPositive ? x : Math.abs(x)).toString()].reverse().join(''));
    if(isPositive && reversedNum>MAX-1) return 0;
    if(!isPositive && reversedNum>MAX) return 0;
    return reversedNum * (isPositive ? 1 : -1);
};