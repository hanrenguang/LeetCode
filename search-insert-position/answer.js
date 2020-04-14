/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let low = 0; let high = nums.length - 1; let
    mid = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return nums[mid] > target ? mid : mid + 1;
};
