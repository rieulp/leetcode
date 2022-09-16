/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = Number.MIN_SAFE_INTEGER;
    
    for(let i=0; i<accounts.length; i++) {
        let money=0;
        
        for(let j=0; j<accounts[i].length; j++){
            money += accounts[i][j];
        }
        max = Math.max(max,money);
    }
    
    return max;
};