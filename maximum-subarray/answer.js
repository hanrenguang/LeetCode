/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(!nums || nums.length === 0) {
        return 0;
    }
    
    let localMax = nums[0], 
        globalMax = nums[0];
        
    for(let i = 1; i < nums.length; i++) {
        localMax = nums[i] + (localMax > 0 ? localMax : 0);
        globalMax = Math.max(localMax, globalMax);
    }
    
    return globalMax;
};