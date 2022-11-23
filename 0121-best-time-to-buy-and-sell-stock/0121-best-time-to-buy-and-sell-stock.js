/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    for(let i=0; i<prices.length-1; i++) {
        prices[i] = i > 0? Math.min(prices[i-1], prices[i]) : prices[i];
        max = Math.max(prices[i+1]-prices[i], max);
    }
    return max;
};