/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) {
        return s;
    }
    
    var maxLen = 0;
    var longestSub = "";
    var len = s.length;
    var str1 = "", str2 = "";
    
    for (var i = 0; i < len; i++) { // 奇子串
        str1 = getMaxSub(s, i, i);
        
        if (str1.length <= maxLen) {
            continue;
        } else {
            longestSub = str1;
            maxLen = str1.length;
        }
    }
    
    for (var i = 0; i < len-1; i++) { // 偶子串
        str2 = getMaxSub(s, i, i+1);
        
        if (str2.length <= maxLen) {
            continue;
        } else {
            longestSub = str2;
            maxLen = str2.length;
        }
    }
    
    return longestSub;
};

/**s
 * 根据奇偶子串返回最长的回文子串
 * @param  {String} s [父串]
 * @param  {Number} j [左指针]
 * @param  {Number} k [右指针]
 * @return {String}
 */
function getMaxSub(s, j, k) {
    var len = s.length;
    
    while (j >= 0 && k < len && s[j] === s[k]) {
        j--;
        k++;
    }
    
    return s.slice(j+1, k);
}