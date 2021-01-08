export default function knapsack(n, W, weights, values, updateLogs, updateOutput) {

    var finalResult;

    weights = [null, ...weights];
    values = [null, ...values];

    let DP = [];
    for(let i = 0; i <= n; i++) {
        DP[i] = [];
        for(let j = 0; j <= W; j++) {
            DP[i][j] = 0;
        }
    }

    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= W; j++) {
            if(i === 0 || j === 0) {
                DP[i][j] = 0;
            } else if(weights[i] > j) {
                DP[i][j] = DP[i - 1][j];
            } else {
                var dontPutInKnapsack = DP[i - 1][j];
                var putInSack = values[i] + DP[i - 1][j - weights[i]];
                DP[i][j] = Math.max(dontPutInKnapsack, putInSack);
            }
        }
    }
      
    let res = DP[n][W];
    let w = W, sum = 0; 
    for (let i = n; i > 0 && res > 0; i--) { 
          
        // either the result comes from the top 
        // (K[i][w]) or from (val[i] + K[i] 
        // [w-wt[i]]) as in Knapsack table. If 
        // it comes from the latter one/ it means  
        // the item is included. 
        if (res == DP[i - 1][w])  
            continue;         
        else { 
            sum += values[i];
            // This item is included. 
            updateLogs(`Selected Item: ${values[i]}, weight: ${weights[i]}, cumulative weight: ${sum}`); 
              
            // Since this weight is included its  
            // value is deducted 
            res = res - values[i]; 
            w = w - weights[i]; 
        } 
    } 
    
    //return the final result
    updateOutput(DP[n][W]);
    return DP[n][W];
}