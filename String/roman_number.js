// roman Number 
function romanNumber(n) {
    let result = ""
    let romansys = {
        M: 1000,
        CM: 900,
        D: 500,
        DC: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    for (let rom in romansys) {
        while (n >= romansys[rom]) {
            result += rom
            n -= romansys[rom]
        }
    }
    return result
}

console.log(romanNumber(66))