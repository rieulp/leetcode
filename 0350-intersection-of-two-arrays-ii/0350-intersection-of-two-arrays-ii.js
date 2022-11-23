/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map();
    
    for(num of nums1) map.set(num, (map.get(num)?? 0)+1);
    
    return nums2.filter(num=> {
        if(!map.has(num)) return false;
        const cnt = map.get(num);
        if(cnt>1) map.set(num, cnt-1);
        else map.delete(num);
        return true;        
    })
};