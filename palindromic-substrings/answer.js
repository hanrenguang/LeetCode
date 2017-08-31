/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    var len = s.length;
    var count = len;
    var temp = 0;
    
    for (var i = 0; i < len; i++) {
        if(temp = findPalindromicSubCount(s, i, i)) {
            count += temp;
        }
    }
    
    for (var j = 0; j < len-1; j++) {
        if(temp = findPalindromicSubCount(s, j, j+1)) {
            count += temp;
        }
    }
    
    return count;
};

/**
 * 找出以j或j、k为中心的回文子串数
 * @param  {String} s [父串]
 * @param  {Number} j [左指针]
 * @param  {Number} k [右指针]
 * @return {Number}
 */
function findPalindromicSubCount(s, j, k) {
    var len = s.length;
    var count = 0;
    
    while (j >= 0 && k < len && s[j] === s[k]) {
        if (k - j + 1 > 1) {
            count++;
        }
        j--;
        k++;
    }
    
    return count;
}