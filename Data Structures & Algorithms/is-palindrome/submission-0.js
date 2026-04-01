class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.replace(/[^a-z0-9]/gi, "");
        cleaned = cleaned.toLowerCase();
    const mid = Math.floor(cleaned.length / 2);

const left = cleaned.slice(0, mid).split("");
const right = cleaned.slice(cleaned.length % 2 === 0 ? mid : mid + 1).split("");

left.sort();
right.sort();
    console.log("left:",left)
    console.log("right:",right)
if (left.join("") === right.join("")) {
    return true;
} else {
    return false;
}
    }
}
