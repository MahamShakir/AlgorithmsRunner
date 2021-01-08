export default function cut_rod(p,n, updateLogs, updateOutput){
    let r = [];
    let s = [];
    r[0] = 0;
    let i,j;
    let maximum_revenue
    for(j=1; j<=n; j++) {
        maximum_revenue = -1;
        for(i=1; i<=j; i++) {
            if(p[i-1] + r[j-i] >= maximum_revenue) {
                s[j] = i;
                console.log(i, j);
            }
            
            maximum_revenue = Math.max(maximum_revenue, p[i-1] + r[j-i]);
        }
        r[j] = maximum_revenue;
    }

    let _n = n;
    while(_n > 0) {
        updateLogs(`Selected piece: ${s[_n]}`);
        _n -= s[_n];
    }

    updateOutput(r[n])
    return r[n];
}