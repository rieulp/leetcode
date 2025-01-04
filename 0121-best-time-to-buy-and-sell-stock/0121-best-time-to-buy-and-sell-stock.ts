function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let minPrice = 10000

    for (const price of prices) {
        maxProfit = Math.max(maxProfit, price - minPrice)
        minPrice = Math.min(minPrice, price);
    }

    return maxProfit
};