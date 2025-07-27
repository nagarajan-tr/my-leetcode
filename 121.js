// 121. Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
    let min = Infinity
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i]
        }else if(prices[i] - min > maxProfit){
            maxProfit = prices[i] - min
        }
    }
    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4])) // Expected output: 5 (Buy at 1 and sell at 6)