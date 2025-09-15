function minimumTotal(traingle){
    let dp = new Array(traingle.length).fill(0).map(() => new Array(traingle.length).fill(0));
    console.log(dp);
    dp[0][0] = traingle[0][0];
    console.log(dp);
    for(let i = 1; i < traingle.length; i++){
        console.log(dp);
        for(let j = 0; j <= i; j++){
            if(j === 0){
                dp[i][j] = dp[i - 1][j] + traingle[i][j];
            }else if(j === i){
                dp[i][j] = dp[i - 1][j - 1] + traingle[i][j];
            }else{
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + traingle[i][j];
            }
        }
    }
    return Math.min(...dp[dp.length - 1]);
}


console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])); // 11