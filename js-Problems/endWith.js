function endWith(str, tar) {
    const left = str.length - tar.length

    console.log(str.slice(left), tar)
    if (str.slice(left) === tar) return true
    return false

}

console.log(endWith("dfsfadgg", "sdgg"))