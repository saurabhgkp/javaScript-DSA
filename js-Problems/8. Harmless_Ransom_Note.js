function ransom(first, second) {
    let obj = {}
    const f = second.split(" ")
    for (let i = 0; i < f.length; i++) {
        const char = f[i]
        obj[char] ? obj[char] += 1 : obj[char] = 1
    }

    const s = first.split(" ")
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (!obj[char]) return false
        else {
            obj[char] -= 1

        }
    }
    return true

}


console.log(ransom("fsd fsd gdh hshd hysg", "fsd fsd gdh hshd hysg fs ser sf"))