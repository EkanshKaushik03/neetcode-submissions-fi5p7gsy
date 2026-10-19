class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[][]}
     */
    findDifference(nums1, nums2) {
        let answer = [[],[]]

        for(let i=0; i<nums1.length; i++){
            if(!nums2.includes(nums1[i])){
                if(!answer[0].includes(nums1[i])) answer[0].push(nums1[i])
                
            } 
        }
        for(let j=0; j<nums2.length; j++){
            if(!nums1.includes(nums2[j])){
                if(!answer[1].includes(nums2[j])) answer[1].push(nums2[j])
                
            } 
        }
        return answer
    }
}
