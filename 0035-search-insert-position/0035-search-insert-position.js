/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let s = 0;
    let e = nums.length - 1;
    let mid;
    if(nums[s]>=target) return 0;
    if(nums[e]<target) return e+1;
    
    
    while(s <= e) {
        mid = Math.floor((s + e) / 2);
        if(nums[mid] < target) {
            if(target<= nums[mid + 1] ) return mid + 1;
            s = mid;
        }else {
            if(nums[mid - 1] < target) return mid;
            e = mid-1;
        }
    }
    return mid;
};