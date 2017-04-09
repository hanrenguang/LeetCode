/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m === 0 || n === 0) {
        return 0;
    }
    
    let countWays = new Array(m);
    
    for (let i = 0; i < m; i++) {
        countWays[i] = new Array(n);
    }
    
    countWays[0].fill(1);
    for (let i = 0; i < m; i++) {
        countWays[i][0] = 1;
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            countWays[i][j] = countWays[i-1][j] + countWays[i][j-1];  // 状态转移方程
        }
    }
    
    return countWays[m-1][n-1];
};