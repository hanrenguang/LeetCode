/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var len = nums.length;
    var temp = 0;
    var result = [];
    
    for(var i = 0; i < len; i++) {
        temp = Math.abs(nums[i])-1;
        if(nums[temp] < 0) {
            continue;
        }
        nums[temp] = -nums[temp];
    }
    
    for(i = 0; i < len; i++) {
        if(nums[i] > 0) {
            result.push(i+1);
        }
    }
    
    return result;
};