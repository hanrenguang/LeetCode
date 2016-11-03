/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var hash = [];
    
    for(var i = 0; i < s.length; i++) {
        for(var j = 0; j < hash.length; j++) {
            if(s[i] === hash[j][0]) {
                hash[j][1]++;
                break;
            }
        }
        if(j === hash.length) {
            hash[j] = new Array(s[i], 1, i);
        }
    }
    
    for(i = 0; i < hash.length; i++) {
        if(hash[i][1] === 1) {
            return hash[i][2];
        }
    }
    
    return -1;
};