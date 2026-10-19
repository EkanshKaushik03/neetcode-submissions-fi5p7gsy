class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums) {
        let set = new Set()
        let result = []
        for(let i=1; i<=nums.length; i++){
            set.add(i)
        }

        for(let j=0; j<nums.length; j++){
            if(set.has(nums[j])){
                set.delete(nums[j])
            }
            else {
                result.push(nums[j])
            }
        }
       
        return [result,...set]
    }
}
