/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    var len = A.length;
    var sum = 0;
    var result = 0;
    var temp = 0;
    
    for(var i = 0; i < len; i++) {
        sum += A[i];
        result += A[i]*i;
    }
    
    temp = result;
    
    for(i = 1; i < len; i++) {
        temp = temp + sum - len * A[len-i];
        if(temp > result) {
            result = temp;
        }
    }
    
    return result;
};