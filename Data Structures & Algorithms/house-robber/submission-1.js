class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let cache = new Int32Array(nums.length).fill(-1)
       const dfs = (i) => {
        if(i>= nums.length) return 0
        if(cache[i] !== -1) return cache[i]
        return cache[i] = Math.max(nums[i] + dfs(i+2), dfs(i+1))
       }
       return dfs(0)
    }
}
