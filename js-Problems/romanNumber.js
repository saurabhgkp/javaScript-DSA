function roman(t) {
    const obj = {
        m: 1000,
        cm: 900,
        d: 500,
        cd: 400,
        c: 100,
        xc: 90,
        l: 50,
        xl: 40,
        x: 10,
        ix: 9,
        v: 5,
        iv: 4,
        i: 1,
    }
    let result = ''
    for (let key in obj) {
        while (t >= obj[key]) {
            result += key
            t -= obj[key]
        }

    }
    return result

}


console.log(roman(8))