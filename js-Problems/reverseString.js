function reverse(str) {
    const s = str.toLowerCase().replace(/[\W_]/g, "")
    let result = ""
    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i]
    }
    return result
}

console.log(reverse("dfs_ ds"))


///////////////////////   using recursion

function reverse(str) {

    if (str.length === 0) {
        return ""
    }
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1))

}

console.log(reverse("abcd"))