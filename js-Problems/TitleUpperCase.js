function titleUpper(str) {

    const s = str.split(" ")
    for (let i = 0; i < s.length; i++) {

        s[i] = s[i][0].toUpperCase() + s[i].slice(1)
    }
    return s
}

console.log(titleUpper("gd sdghj dhsb"))