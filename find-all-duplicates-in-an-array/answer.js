/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var result = [];
    var temp = 0;
    var i = 0;
    while(i < nums.length) {
        if( Math.abs(nums[i]) === i+1 ) {
            i++;
            continue;
        }
        
        if(nums[nums[i]-1] < 0) {
            i++;
            continue;
        }
        else if(nums[nums[i]-1] === nums[i]) {
            nums[nums[i]-1] = -nums[nums[i]-1];
            i++;
            continue;
        }
        else {
            temp = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i] = temp;
        }
    }
    
    for(i = 0; i < nums.length; i++) {
        if(nums[i] < 0) {
            result.push(i+1);
        }
    }
    
    return result;
};