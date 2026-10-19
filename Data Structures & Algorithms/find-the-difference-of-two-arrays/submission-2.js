class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[][]}
     */
    findDifference(nums1, nums2) {
        let answer = [[],[]]
        let set1 = new Set(nums1)
        let set2 = new Set(nums2)

        for(const num of set1){
            if(!set2.has(num)){
                 answer[0].push(num)
                
            } 
        }
        for(const num of set2){
            if(!set1.has(num)){
                answer[1].push(num)
                
            } 
        }
        return answer
    }
}
