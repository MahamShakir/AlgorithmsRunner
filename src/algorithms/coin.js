function coinChange(S, N)
{
    // if total is 0, no coins are needed
    if (N == 0)
        return 0;
 
    // return INFINITY if total become negative
    if (N < 0)
        return Number.MAX_SAFE_INTEGER;
 
    // initialize minimum number of coins needed to infinity
    var coins = Number.MAX_SAFE_INTEGER;
 
    // do for each coin
    for (var i = 0; i < S.length; i++)
    {
        // recur to see if total can be reached by including
        // current coin S[i]
        var res = coinChange(S, N - S[i]);
 
        // update minimum number of coins needed if choosing current
        // coin resulted in solution
        if (res != Number.MAX_SAFE_INTEGER)
            coins = Math.min(coins, res + 1);
    }
 
    // return minimum number of coins needed
    return coins;
}

console.log(coinChange([1,3,5,7], 15));