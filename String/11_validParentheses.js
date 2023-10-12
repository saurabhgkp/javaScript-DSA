//https://leetcode.com/problems/valid-parentheses/
function validParentheses(str) {
    let obj = { "(": ")", "{": "}", "[": "]" }

    let store = []

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (obj[char]) {
            store.push(char)
        } else if (obj[store.pop()] !== char) {
            return false
        }
    }
    return store.length === 0


}

console.log(validParentheses("(})"))