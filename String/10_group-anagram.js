//https://leetcode.com/problems/group-anagrams/
function groupAnagrams(strs) {
    let obj = {}
    let result
    strs.forEach((str) => {
        let short = str.split("").sort().join("")
        if (obj[short]) {
            obj[short].push(str)
        } else {
            obj[short] = [short]
        }
    })
    result = Object.values(obj)
    return result
}
console.log(groupAnagrams(["accr", "cra", "fg", "gf"]))