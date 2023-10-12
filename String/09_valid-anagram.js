// https://leetcode.com/problems/valid-anagram/submissions/
function anagram(first, second) {
    let obj = {}
    if (first.length !== second.length) return false
    for (let i = 0; i < first.length; i++) {
        let char = first[i]
        obj[char] ? obj[char]++ : obj[char] = 1
    }

    for (let i = 0; i < second.length; i++) {
        let char = second[i]
        if (!obj[char]) return false
        else {
            obj[char]--
        }
    }

    return obj
}

console.log(anagram("accr", "cra"))