export default function matrixChainMultiplication(dims, updateLogs, updateOutput){
    let n = dims.length;

    let c = [n+1];
    for (var i = 0; i < n+1; i++){
        c[i] = [];
    }
 
    for (var i = 1; i <= n; i++)
        c[i][i] = 0;
 
    for (var len = 2; len <= n; len++) // Subsequence lengths
    {
        for (var i = 1; i <= n - len + 1; i++)
        {
            let j = i + len - 1;
            c[i][j] = Number.MAX_SAFE_INTEGER;
 
            for (var k = i; j < n && k <= j - 1; k++)
            {
                let cost = c[i][k] + c[k + 1][j] +
                            dims[i - 1]*dims[k]*dims[j];
 
                if (cost < c[i][j])
                    c[i][j] = cost;
            }
        }
        updateLogs(`From 1..${len}:`);
        updateLogs(c[1][len]);
    }

    updateOutput(c[1][n-1]);
    return c[1][n - 1];
}
