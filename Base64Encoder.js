function fromBase64(str) {
    var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    var result = []
    var final = []
    key = key.split("")
    var arr = str.split("").map((x) => {
        return ("000000"+key.indexOf(x).toString(2)).substr(-6)
    })
    var arr = arr.join('').split('')
    while(arr.length%8!==0){
        arr.pop()
    }
    for (let j = 0; j < arr.length / 8; j++) {
        result.push(arr.slice(8 * j, 8 * j + 8))
    }
    for (let i = 0; i < result.length; i++) {
        final.push(String.fromCharCode(parseInt(result[i].join(''), 2)))
    }
    console.log(final.join(''));
    return final.join('')
}


function toBase64(str) {
    var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    key = key.split("")
    var arr = str.split("")
    var result = []
    var final = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] = ("000000000" + arr[i].charCodeAt().toString(2)).substr(-8)
    }
    arr = arr.join("").split("")
    while (arr.length % 6 !== 0) {
        arr.push('0')
    }
    for (let j = 0; j < arr.length / 6; j++) {
        result.push(arr.slice(6 * j, 6 * j + 6))
    }
    for (let i = 0; i < result.length; i++) {
        final.push(key[parseInt(result[i].join(''), 2)])
    }
    final = final.join("")
    console.log(final);
    return final;
}