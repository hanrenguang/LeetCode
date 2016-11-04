/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var arr = new Array(n);
    
    for(var j = 2; j < n; j++) {
        arr[j] = true;
    }
    
    for(var i = 2; i < n; i++) {
        if(!arr[i]) continue;
        for(j = i*i; j < n; j += i) {
            arr[j] = false;
        }
    }
    
    var count = 0;
    for(i = 2; i < n; i++) {
        if(arr[i]) {
            count++;
        }
    }
    
    return count;
};