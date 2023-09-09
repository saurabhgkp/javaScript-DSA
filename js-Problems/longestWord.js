function longestWord(str) {
    let longword = ""
    const words = str.split(" ")
    for (let word of words) {
        if (longword.length < word.length) {
            longword = word
        }
    }
    return longword
}

console.log(longestWord("gjhg sghjghdjh jhsgjh jhsg"))