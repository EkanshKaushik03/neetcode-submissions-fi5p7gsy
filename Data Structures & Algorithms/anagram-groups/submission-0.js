class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sorted = {}
        for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split('').sort().join('')

        if (!sorted[key]) {
            sorted[key] = []
        }

        sorted[key].push(strs[i])
    }
    return [...Object.values(sorted)]
}
}
