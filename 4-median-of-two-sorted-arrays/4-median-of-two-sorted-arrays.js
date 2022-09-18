/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mid = (nums1.length + nums2.length)/2;
    const merged = [];
    while((nums1.length || nums2.length) && merged.length<=mid) {
        if(nums1.length && nums2.length) {
            if(nums1[0]<nums2[0]) merged.push(nums1.shift());
            else merged.push(nums2.shift());
        }else if(nums1.length) merged.push(nums1.shift())
        else merged.push(nums2.shift());
    }
    
    if(Number.isInteger(mid)) {
        return (merged[mid-1]+merged[mid])/2
    }
    return merged[Math.floor(mid)];
    
};