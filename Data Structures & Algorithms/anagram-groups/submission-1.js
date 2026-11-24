class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()

        for(let i=0; i<strs.length; i++){
            let sorted = strs[i].split("").sort().join("")
            if(!map.get(sorted)) map.set(sorted,[])
            map.get(sorted).push(strs[i])
        }
        return [...map.values()]
    }
}
