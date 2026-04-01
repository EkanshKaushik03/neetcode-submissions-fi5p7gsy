class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        
        if(!strs.length) {
            return '!@223####'
            }
        let result = strs.join("@#$@!!@")
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === '!@223####') return []
        let arr = str.split("@#$@!!@")
        return arr
    }
}
