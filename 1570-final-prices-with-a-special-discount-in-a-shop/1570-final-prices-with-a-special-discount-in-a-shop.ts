function finalPrices(prices: number[]): number[] {
    const itemCnt = prices.length;
    for(let i=0; i<itemCnt-1; i++) {
        for(let j=i+1; j<itemCnt; j++) {
            if(prices[j] <= prices[i]) {
                prices[i] -= prices[j];
                break;
            }
        }
    }
    return prices;
};