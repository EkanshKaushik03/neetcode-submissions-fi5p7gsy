class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let cache = new Int32Array(cost.length).fill(-1) 
        let dfs = (i) => {
            let left = 0
            let right = 0
            if(i < cost.length && cache[i] != -1) return cache[i]
            if(i < cost.length) {
                left = dfs(i+1)
                right = dfs(i+2)
            }
            if(i>=cost.length) return 0
            return  cache[i] = cost[i] != undefined ? cost[i] + Math.min(left,right) : 0
        }
        return Math.min(dfs(0),dfs(1))
        
    }
}
