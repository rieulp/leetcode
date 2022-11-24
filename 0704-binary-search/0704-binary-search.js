/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let s = 0;
    let e = nums.length-1;
    
    while(s<=e) {
        const mid = Math.floor((s+e)/2);
        if(nums[mid]===target) return mid;
        if(nums[mid]<target) s=mid+1;
        else e=mid-1;
    }
    return -1;
};