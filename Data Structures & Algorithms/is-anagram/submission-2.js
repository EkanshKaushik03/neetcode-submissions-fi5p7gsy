class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let obj = {}
        for (let string in s) {
            let char = s[string]
            if (obj[char]) {
                obj[char]++
            } else {
                obj[char] = 1
            }
        }
        console.log(obj)

        for(let c of t){
            if(obj[c]){
                if(obj[c] === 0) return false
                obj[c]--
            }
            else {
                return false
            }
        }
        for(let c in obj) {
            if(obj[c] > 0) return false
        }
        console.log(obj)
        return true
    }
}
