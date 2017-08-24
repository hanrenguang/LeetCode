/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length;
    var hash = {};
    
    for (var i = 0; i < len; i++) {
        if (typeof hash[nums[i]] != "undefined") {
            return [hash[nums[i]], i];
        } else {
            hash[target - nums[i]] = i;
        }
    }
};