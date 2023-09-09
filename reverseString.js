function reverse(str) {
    const s = str.toLowerCase().replace(/[\W_]/g, "")
    let result = ""
    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i]
    }
    return result
}

console.log(reverse("dfs_ ds"))