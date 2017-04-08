/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let hash = {}, arr = [], result = "";
    
    for(let i = 0; i < s.length; i++) {
        if(!hash[s[i]]) {
            hash[s[i]] = 0;
            arr.push(s[i]);
        }
        hash[s[i]]++;
    }
    
    arr.sort(function (a, b) {
        return hash[b] - hash[a];
    });
    
    for(let i = 0; i < arr.length; i++) {
        result += (new Array(hash[arr[i]])).fill(arr[i]).join("");
    }
    
    return result;
};