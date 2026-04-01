class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.replace(/[^a-z0-9]/gi, "");
        cleaned = cleaned.toLowerCase();
        let l = 0;
        let r = cleaned.length -1;
        console.log(cleaned)
        while(l<r){
            if(cleaned[l] !== cleaned[r]){
                return false
            }
            l++
            r--
        }
        return true
    }
}
