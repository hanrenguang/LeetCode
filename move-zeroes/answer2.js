/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var j = 0;
    var nLen = nums.length;

    for(var i = 0; i < nLen; i++) {
        if(nums[i] !== 0) {
            nums[j++] = nums[i];
        }
    }
    
    while(j < nLen) {
        nums[j++] = 0;
    }
};