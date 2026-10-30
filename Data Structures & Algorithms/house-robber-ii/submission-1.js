class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let cache = new Int32Array(nums.length - 1).fill(-1)
        let first = nums.slice(0, -1)
        let second = nums.slice(1)
        let dfs = (i,arr) => {
            if(nums.length === 1) return nums[0]
            if(i>= arr.length) return 0
            if(cache[i] !== -1) return cache[i]
            return cache[i] = Math.max(arr[i] + dfs(i+2,arr), dfs(i+1,arr))
        }
        let f = dfs(0,first)
        cache = new Int32Array(nums.length - 1).fill(-1)
        let s = dfs(0,second)
        return Math.max(f,s)
    }
}
