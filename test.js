let arr = ['1', '2', '3', '4'];
let obj = {
    '1': 'a',
    '3': 'a',
    '2': 'c'
}

let arr2 = [{ a: '1' }, { a: '3' }]
arr = arr.filter(item => {
    for (let key in obj) {
        if (item == key) {
            return false
        }
    }
    return true
}
)

console.log('arr', arr);