// Frequency Counter 
//hello => {h:1,e:1,l:2,o:1}

function charCount(str) {
    let obj = {}

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        obj[char] ? obj[char] += 1 : obj[char] = 1

        //   if( obj[char]>0){
        //       obj[char]++ 
        //   }
        //   else{
        //     obj[char] =1

        //   }

    }
    return obj
}


console.log(charCount("hhello"))
