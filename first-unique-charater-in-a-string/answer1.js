/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var len = s.length;
    var hash = [];
    var arr = [];
    
    if(len === 0) {
        return -1;
    }
    hash.push(s[0]);
    for(var i = 1; i < len; i++) {
        for(var j = 0; j < hash.length; j++) {
            if(s[i] === hash[j]) {
                arr.push(hash[j]);
                hash.push(" ");
                break;
            }
        }
        if(j === hash.length) {
            hash.push(s[i]);
        }
    }
    
    for(i = 0; i < hash.length; i++) {
        if(hash[i] !== " ") {
            for(var k = 0; k < arr.length; k++) {
                if(hash[i] === arr[k]) {
                    k--;
                    break;
                }
            }
            if(k === arr.length) {
                return i;
            }
        }
    }
    
    return -1;
};