// https://leetcode.com/problems/longest-palindromic-substring/
function subPalindrome(str) {
    let startindex = 0
    let maxln = 1
    function expandMidd(left, right) {
        console.log(left, right)
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            let currentln = right - left + 1
            if (currentln > maxln) {
                maxln = currentln
                startindex = left
            }
            left++
            right--
        }
    }
    for (let i = 0; i < str.length; i++) {
        expandMidd(i - 1, i + 1)
        expandMidd(i, i + 1)
    }
    return str.slice(startindex, startindex + maxln)
}

console.log(subPalindrome("cbbd"))