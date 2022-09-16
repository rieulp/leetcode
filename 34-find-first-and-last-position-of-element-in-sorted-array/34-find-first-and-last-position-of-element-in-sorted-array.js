/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(!nums.length) return [-1,-1];
    let lt=0;
    let rt=nums.length;
    let mid;
    
    while(lt <= rt) {
        mid=Math.floor((lt+rt)/2);
        if(nums[mid]===target) break;
        if(nums[mid]>target) rt = mid-1;
        else lt=mid+1;
    }
    
    if(nums[mid] === target) {
        lt = rt = mid;
        while(lt>0 && nums[lt-1] === target) lt--;        
        while(rt<nums.length-1 && nums[rt+1] === target) rt++;
        return [lt, rt];
    }else return [-1,-1];
};