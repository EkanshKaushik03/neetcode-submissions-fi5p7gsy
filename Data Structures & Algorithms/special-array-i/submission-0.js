class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        if(nums.length < 2) return true
        let slow = 0
        for(let i=1; i<nums.length; i++){
            if(!((nums[slow] % 2 !== 0 && nums[i] % 2 === 0) || (nums[i] % 2 !== 0 && nums[slow] % 2 === 0))){
                return false
            }
            slow++
            
        }
        return true
    }
}
