class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        let map = new Map()
        let longest = 0;
        let firstOdd = true
        for(let c of s){
            map.set(c, (map.get(c) || 0) + 1);
        }
        for(let [key,value] of map){
            if(value % 2 === 0) {
                longest += value
            }
            else if(value % 2 !== 0 && firstOdd) {
                longest += value
                firstOdd = false
            }
            else {
                longest += value - 1
            }
        }
        return longest
    }
}
