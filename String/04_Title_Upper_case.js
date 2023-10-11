// title Upper Case 
function titleUpperCase(strs) {
    let strArr = strs.split(" ")
    let result = ""
    for (let i = 0; i < strArr.length; i++) {

        result += strArr[i][0].toUpperCase() + strArr[i].slice(1) + " "
    }
    return result
}

console.log(titleUpperCase("the challenge to take on algorithms"))