function mutation(first, second) {
    const obj = {}
    for (let i = 0; i < first.length; i++) {
        let r = first[i]
        obj[r] ? obj[r] += 1 : obj[r] = 1
    }
    for (let i = 0; i < second.length; i++) {
        let r = second[i]
        if (!obj[r]) {
            return false
        }
        else {
            obj[r] -= 1
        }
    }
    return true
}


console.log(mutation("ddfjsh", "dfs"))