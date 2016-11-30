/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var j = 0;
    var nLen = nums.length;

    for(var i = 0; i + j < nLen; i++) {
        if(nums[i+j] === 0) {
            j++;
            i--;
        }
        else if(j !== 0) {
            nums[i] = nums[i+j];
        }
    }
    
    while(j !== 0) {
        nums[nLen - j] = 0;
        j--;
    }
};