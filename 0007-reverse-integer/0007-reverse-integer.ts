function reverse(x: number): number {
  const MAX = Math.pow(2, 31);
  const isPositive = x >= 0;
  const reversedNum = +[...(isPositive ? x : Math.abs(x)).toString()].reverse().join("");
  if (isPositive ? reversedNum > MAX - 1 : reversedNum > MAX) return 0;
  return reversedNum * (isPositive ? 1 : -1);
}
