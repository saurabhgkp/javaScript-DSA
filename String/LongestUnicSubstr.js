// Longest Substring Without Repeating Characters
function uni(str) {
    let obj = {}
    let startIn = 0
    let maxLn = 0

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (obj[char] >= startIn) {
            startIn = obj[char] + 1
        }
        obj[char] = i
        maxLn = Math.max(maxLn, i - startIn + 1)
    }
    return maxLn
}
console.log(uni("dacvfasdfafa"))