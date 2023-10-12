//string_frequency_count
function frequencyCounter(str) {
    let obj = {}

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        obj[char] ? obj[char]++ : obj[char] = 1


    }

    return obj
}

console.log(frequencyCounter("accr"))