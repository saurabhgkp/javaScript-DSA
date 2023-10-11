// https://leetcode.com/problems/longest-palindromic-substring
// isPalindrome

function isPalindrome(s) {
    let startInd = 0
    let maxLn = 1

    function expamidd(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            let countMax = r - l + 1
            if (maxLn < countMax) {
                maxLn = countMax
                startInd = l
            }

            l++
            r--
        }
    }
    for (let i = 0; i < s.length; i++) {
        expamidd(i - 1, i + 1)
        expamidd(i, i + 1)

    }

    return s.slice(startInd, startInd + maxLn)
}

console.log(isPalindrome("cbbd"))






