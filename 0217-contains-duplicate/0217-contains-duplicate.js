/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i=0; i<nums.length;i++) {
        if(i!==nums.lastIndexOf(nums[i])) return true;
    }
    return false;
};