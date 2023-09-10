//Anagram 


function Anagram(first, second) {
    if (first.length !== second.length) return false
    let obj = {}
    for (let i = 0; i < first.length; i++) {
        let char = first[i]
        obj[char] = obj[char] + 1 || 1
    }
    for (let i = 0; i < second.length; i++) {
        let char = second[i]
        if (!obj[char]) return false
        else obj[char] -= 1
    }
    //  return obj
    return true

}

console.log(Anagram("anagram", "naagram"))