/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i=0;
    while(i<n) {
        let pos = nums1.findIndex((v)=> nums2[i]<v);
        pos = pos>-1? pos : m+i;
        for(let j=m+n-1; j>pos; j--) nums1[j] = nums1[j-1];
        nums1[pos] = nums2[i++];
    }
    return nums1;
};