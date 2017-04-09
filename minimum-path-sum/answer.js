/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(!grid || grid.length === 0) {
        return 0;
    }
    
    let minPath = new Array(grid.length),
        m = grid.length,
        n = grid[0].length;
    
    for (let i = 0; i < m; i++) {
        minPath[i] = new Array(n);
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                minPath[i][j] = grid[i][j];
            } else if(i === 0) {
                minPath[i][j] = minPath[i][j-1] + grid[i][j];
            } else if(j === 0) {
                minPath[i][j] = minPath[i-1][j] + grid[i][j];
            } else {
                minPath[i][j] = Math.min(minPath[i-1][j], minPath[i][j-1]) + grid[i][j];  // 状态转移方程
            }
        }
    }
    
    return minPath[m-1][n-1];
};