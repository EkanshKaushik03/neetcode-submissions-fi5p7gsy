
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        const set = new Set();
        let result = 0;

        for (const c of s) {
            if (set.has(c)) {
                set.delete(c);
                result += 2;
            } else {
                set.add(c);
            }
        }

        return result + (set.size > 0 ? 1 : 0);
    }
}
