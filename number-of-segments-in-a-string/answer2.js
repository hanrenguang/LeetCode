/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var count = 0;
    var len = s.length;
    
    for(var i = 0; i < len; i++) {
        if(s[i] !== " " && (i === 0 || s[i-1] === " ")) {
            count++;
        }
    }
    
    return count;
};