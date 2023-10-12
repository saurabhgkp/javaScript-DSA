// https://leetcode.com/problems/ransom-note
function canConstruct(first, second) {
    let obj = {}

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

    return true

}

console.log(canConstruct("cbbd", "cvb"))