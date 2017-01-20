/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var count = 0;
    var len = s.length;
    
    for(var i = 0, j = 0; i < len; i++) {
        if(s[i] === " ") {
            if(j === 0) {
                count++;
            }
            j++;
        }
        else {
            j = 0;
        }
    }
    
    if(s === "" || j === len) {
        count = 0;
    }
    else if(j === 0) {
        count += 1;
    }
    
    if(s[0] === " ") {
        count === 0 ? 0 : count--;
    }
    
    return count;
};