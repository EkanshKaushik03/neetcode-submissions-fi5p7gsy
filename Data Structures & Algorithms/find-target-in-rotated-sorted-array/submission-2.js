class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1
        let mid;

        while(l<=r){
            mid = Math.floor((l+r) / 2);
            if(nums[mid] === target) return mid
            if(nums[mid] > nums[r]){
                if(nums[mid] >= target && nums[l] <= target){
                    r = mid - 1
                }
                else{
                    l = mid + 1
                }
                
            }
            else{
                if(nums[mid] <= target && nums[r] >= target){
                    l = mid + 1
                }
                else {
                    r = mid - 1
                }
            }
        }
        return -1
    }
}
